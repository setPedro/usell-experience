"use client";

import Button from "@/components/Button";
import { cn } from "@/utils/cn";
import { useState } from "react";

export default function MainApp() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://v2.convertapi.com/convert/web/to/png?Secret=SEAmI4OIwY6LApMs&Url=${input}&StoreFile=true&ConversionDelay=5`
      );
      if (!res.ok) {
        throw new Error("Network res was not ok");
      }
      const data = await res.json();
      setImageURL(data.Files[0].Url);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const urlToCode = async () => {
    const res = await fetch("/api/chat", {
      method: 'POST',
    });
  };

  console.log(imageURL)

  return (
    <div className="h-screen w-full flex flex-col lg:items-center lg:flex-row gap-6 p-6">
      <div
        className={cn(
          "mt-14 lg:mt-0 w-full border rounded-xl text-foreground/60 flex items-center justify-center",
          imageURL !== "" || null
            ? "h-min rounded-none"
            : "min-h-[400px] lg:h-full"
        )}
      >
        {imageURL !== "" || null ? (
          <img src={imageURL} alt="website image" />
        ) : (
          <p className={cn("text-sm font-medium", loading && "animate-bounce")}>
            {loading ? "Loading..." : "Your website will be displayed here"}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-6 w-full h-full">
        <div className="w-full min-h-[400px] lg:h-full border rounded-xl text-foreground/60 flex items-center justify-center">
          <p className="text-sm font-medium">
            Your review will be displayed here
          </p>
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
                <Button bg="whiteapp" onClick={handleClick}>
                  Preview
                </Button>
                <Button bg="gradientapp">Review</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
