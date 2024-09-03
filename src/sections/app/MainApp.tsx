"use client";

import Button from "@/components/Button";
import ProtectedRoute from "@/components/protectedRoute";
import { useAuth } from "@/context/FirebaseContext";
import {
  fetchGPTResponse,
  fetchPerformance,
  generateImageFromURL,
} from "@/services/chat";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { createWebsite, readWebsites } from "@/services/db";
import { formatURL } from "@/utils/formatURL";
import { useAppDispatch, useAppSelector } from "@/state/store";
import { selectWebsites } from "@/state/websites/selector";
import { setWebsites } from "@/state/websites/reducer";
import { useRouter } from "next/navigation";
import { Websites, OpenAIResponse } from "@/state/websites/types";
import Image from "next/image";

export default function MainApp({ webId }: { webId: string }) {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [lastReviewed, setLastReviewed] = useState("")
  const [inputError, setInputError] = useState("");

  const [loadingPreview, setLoadingPreview] = useState(false);
  const [loadingReview, setLoadingReview] = useState(false);
  const [loadingScores, setLoadingScores] = useState(false);

  const [openAIResponse, setOpenAIResponse] = useState<
    OpenAIResponse | undefined
  >();

  const average = (() => {
    if (openAIResponse?.scores.design && openAIResponse?.scores.performance) {
      return (
        (openAIResponse.scores.design + openAIResponse.scores.performance) / 2
      );
    }
    return undefined;
  })()

  const dispatch = useAppDispatch();
  const websites = useAppSelector(selectWebsites);

  const router = useRouter();
  const auth = useAuth();
  const user = auth?.user;

  // Fetch websites when user logs in
  useEffect(() => {
    const fetchWebsites = async () => {
      if (websites) {
        if (Object.keys(websites).length === 0 && user) {
          const _websites: Websites = (await readWebsites(user)) || {};
          dispatch(setWebsites(_websites));
        }
      }
    };
    fetchWebsites();
  }, [user, dispatch, websites]);

  // Set values when webId changes
  useEffect(() => {
    if (websites) {
      const keys = Object.keys(websites);
      if (keys.length === 0 || !websites[webId]) {
        return;
      }
      setImageURL(websites[webId].imageURL);
      setOpenAIResponse(websites[webId].openAIResponse);
      setLastReviewed(websites[webId].input);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, JSON.stringify(websites), webId]);

  const handlePreview = async () => {
    setInputError("");
    if (!user && !input) {
      return null
    }

    let _imageURL = imageURL;
    setImageURL("");
    setLoadingPreview(true);
    _imageURL = await generateImageFromURL(input) || "";
    setImageURL(_imageURL);
    setLoadingPreview(false);

    if (!_imageURL) {
      setInputError("Invalid URL");
    }

    return _imageURL;
  };

  const handleReview = async () => {
    
    if (!user) {
      return
    }

    const { scores: prevScores } = openAIResponse || {};
    setInputError("");
    setOpenAIResponse(undefined)
    setLoadingReview(true);
    setLoadingScores(true);

    let _imageURL: string | null = imageURL;
    let _input = formatURL(input);
    let _openAIResponse: OpenAIResponse | undefined
    const isNewUrl = lastReviewed !== _input;
    
    if (isNewUrl) {
      _imageURL = await handlePreview();
    }

    if (!_imageURL) {
      setInputError("Invalid URL");
      setLoadingReview(false);
      setLoadingScores(false);
      return
    }

    const { response, scores } = await fetchGPTResponse(_imageURL);
    _openAIResponse = {
      response,
      scores: {
        design: isNewUrl ? scores.design : prevScores?.design,
      },
    };
    setOpenAIResponse(_openAIResponse);
    setLoadingReview(false);

    const performance = await fetchPerformance(input);
    _openAIResponse.scores.performance = performance;
    setOpenAIResponse(_openAIResponse)
    setLoadingScores(false);

    // Add the website to the database
    const _newWebId = await createWebsite(
      _imageURL,
      _input,
      _openAIResponse,
      user
    );
    const _websites: Websites = (await readWebsites(user)) || {};
    dispatch(setWebsites(_websites));
    setLastReviewed(_input);
    if (_newWebId) {
      router.push(`/app/${_newWebId}`);
    }
  };

  return (
    <ProtectedRoute>
      <div className="h-screen w-full flex flex-col lg:items-center lg:flex-row gap-6 p-6">
        <div
          className={cn(
            "no-scrollbar mt-14 lg:mt-0 w-full lg:w-1/2 min-h-[400px] overflow-y-scroll rounded-xl",
            imageURL.startsWith("/") || imageURL.startsWith("https://")
              ? "lg:max-h-full"
              : "lg:h-full flex items-center justify-center border text-foreground/60"
          )}
        >

          {imageURL.startsWith("/") || imageURL.startsWith("https://") ? ( // Make sure it's not a random string
            <Image
              src={imageURL}
              alt="website image"
              width={1024}
              height={1024}
              priority
              className="w-full h-auto"
            />
          ) : (
            <p
              className={cn(
                "text-sm font-medium",
                loadingPreview && "animate-bounce"
              )}
            >
              {loadingPreview
                ? "Loading..."
                : "Your website will be displayed here"}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-1/2 h-full">
          <div
            className={cn(
              "no-scrollbar flex flex-col overflow-y-auto w-full min-h-[400px] lg:h-full border rounded-xl text-foreground/60",
              openAIResponse ? "p-4 gap-2" : "justify-center items-center"
            )}
          >
            {openAIResponse ? (
              <ReactMarkdown>{openAIResponse.response}</ReactMarkdown>
            ) : (
              <p
                className={cn(
                  "text-sm font-medium",
                  loadingReview && "animate-bounce"
                )}
              >
                {loadingReview
                  ? "Loading..."
                  : "Your review will be displayed here"}
              </p>
            )}
          </div>
          <div className="pb-6 lg:pb-0 flex flex-col gap-6 w-full bg-appbackground">
            <div className="flex flex-col lg:flex-row gap-2.5">
              <div className="flex lg:flex-col items-center text-sm gap-3 p-3 lg:w-1/3 rounded-md bg-sidebarbackground">
                <p>Performance</p>
                <div className="text-2xl">
                  {openAIResponse?.scores.performance ? (
                    openAIResponse.scores.performance
                  ) : (
                    <p
                      className={cn(
                        loadingScores && "animate-bounce text-base"
                      )}
                    >
                      {loadingScores ? "-" : "0"}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex lg:flex-col items-center gap-3 p-3 lg:w-1/3 rounded-md bg-sidebarbackground">
                <p>Design</p>
                <div className="text-2xl">
                  {openAIResponse?.scores.design ? (
                    openAIResponse.scores.design
                  ) : (
                    <div className="text-2xl">
                      {openAIResponse?.scores.design ? (
                        openAIResponse.scores.design
                      ) : (
                        <p
                          className={cn(
                            loadingReview && "animate-bounce text-base"
                          )}
                        >
                          {loadingReview ? "-" : "0"}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex lg:flex-col items-center gap-3 p-3 lg:w-1/3 rounded-md bg-sidebarbackground">
                <p>Average</p>
                <div className="text-2xl">
                  {average ? (
                    average
                  ) : (
                    <p
                      className={cn(
                        loadingScores && "animate-bounce text-base"
                      )}
                    >
                      {loadingScores ? "-" : "0"}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:w-full">
              <input
                type="text"
                placeholder="https://example.com"
                onChange={(e) => setInput(e.target.value)}
                className="border rounded text-foreground/50 hover:text-foreground bg-transparent px-3 py-2"
              />
              <div className="flex flex-col gap-2.5 w-full md:items-end">
                <div>
                  { inputError && <p className="text-red-500 text-sm">{inputError}</p> }
                </div>
                <div className="flex flex-col md:flex-row gap-2.5 w-full lg:w-fit"> 
                  <Button bg="whiteapp" onClick={handlePreview} className="w-full md:w-1/2 lg:w-fit">
                    Preview
                  </Button>
                  <Button bg="gradientapp" onClick={handleReview} className="w-full md:w-1/2 lg:w-fit">
                    Review
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
