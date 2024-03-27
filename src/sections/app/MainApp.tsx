"use client";

import Button from "@/components/Button";
import ProtectedRoute from "@/components/protectedRoute";
import { useAuth } from "@/context/FirebaseContext";
import { generateGPTReview, generateImageFromURL } from "@/services/chat";
import { cn } from "@/utils/cn";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Websites } from "./WebsiteTypes";
import { createWebsite, readWebsitesFromDB } from "@/services/db";
import { testResponseToSaveMoney } from "@/app/api/chat/prompts";
import { formatURL } from "@/utils/urlFormatted";

export default function MainApp() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [websites, setWebsites] = useState<Websites | null>(null);
  const [loadingPreview, setLoadingPreview] = useState<boolean>(false);
  const [loadingReview, setLoadingReview] = useState<boolean>(false);

  const [openAIResponse, setOpenAIResponse] = useState<string | undefined>("");

  const auth = useAuth();
  const user = auth?.user;

  //readwebsites (unused here at the moment)
  if (websites === null && user) {
    const fetchWebsites = async () => {
      const _websites = await readWebsitesFromDB(user);
      setWebsites(_websites);
    };
    fetchWebsites();
  }

  const handlePreview = async () => {
    if (!imageURL) {
    setLoadingPreview(true);      
    }
    let _imageURL = imageURL;
    // setImageURL("");
    if (input && user) {
      _imageURL = await generateImageFromURL(input); // Await and set imageURL
      setImageURL(_imageURL);
    }
    setLoadingPreview(false);
    console.log("Website image previewed");
    return _imageURL; // Return the updated imageURL
  };

  const handleReview = async () => {
    setOpenAIResponse("");
    setLoadingReview(true);
    let _imageURL = "";
    if (!_imageURL) {
      _imageURL = await handlePreview();
    }
    const _openAIResponse = await generateGPTReview(_imageURL);
    setOpenAIResponse(_openAIResponse);
    // create the new Website to pass it to database
    let _input = formatURL(input);
    if (input && user) {
      createWebsite(_imageURL, _input, user);
    }
    console.log("Website image reviewed");
    setLoadingReview(false);
  };

  return (
    <ProtectedRoute>
      <div className="h-screen w-full flex flex-col lg:items-center lg:flex-row gap-6 p-6">
        <div
          className={cn(
            "mt-14 lg:mt-0 w-full border rounded-xl text-foreground/60 flex items-center justify-center",
            imageURL !== "" || null
              ? "rounded-none lg:max-w-[50%]"
              : "min-h-[400px] lg:h-full lg:w-1/2"
          )}
        >
          {imageURL !== "" || null ? (
            <img src={imageURL} alt="website image" />
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
              "flex flex-col overflow-y-auto w-full min-h-[400px] lg:h-full border rounded-xl text-foreground/60",
              openAIResponse ? "p-4 gap-2" : "justify-center items-center"
            )}
          >
            {openAIResponse ? (
              <ReactMarkdown>{openAIResponse}</ReactMarkdown>
            ) : (
              <p
                className={cn(
                  "text-sm font-medium",
                  loadingReview && "animate-bounce"
                )}
              >
                {loadingReview
                  ? "Loading..."
                  : "Yor review will be displayed here"}
              </p>
            )}
          </div>
          <div className="pb-6 lg:pb-0 flex flex-col gap-6 w-full bg-appbackground">
            <div className="flex flex-col lg:flex-row gap-2.5">
              <div className="flex lg:flex-col items-center gap-3 p-3 lg:w-1/3 rounded-md bg-sidebarbackground">
                <p>Performance score:</p>
                <p>0</p>
              </div>
              <div className="flex lg:flex-col items-center gap-3 p-3 lg:w-1/3 rounded-md bg-sidebarbackground">
                <p>Design score:</p>
                <p>0</p>
              </div>
              <div className="flex lg:flex-col items-center gap-3 p-3 lg:w-1/3 rounded-md bg-sidebarbackground">
                <p>Avg. score:</p>
                <p>0</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:w-full">
              <input
                type="text"
                placeholder="https://example.com"
                onChange={(e) => setInput(e.target.value)}
                className="border rounded text-foreground/50 hover:text-foreground bg-transparent px-3 py-2"
              />
              <div className="flex flex-col lg:flex-row gap-6 w-full lg:justify-between">
                <Button bg="whiteapp">Browse Prompts</Button>
                <div className="flex flex-col lg:flex-row gap-2.5">
                  <Button bg="whiteapp" onClick={handlePreview}>
                    Preview
                  </Button>
                  <Button bg="gradientapp" onClick={handleReview}>
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
