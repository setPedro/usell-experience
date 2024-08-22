"use client";

import Button from "@/components/Button";
import { useAuth } from "@/context/FirebaseContext";
import { cn } from "@/utils/cn";
import { Tiro_Telugu } from "next/font/google";
import Link from "next/link";

const TiroTelugu = Tiro_Telugu({
  subsets: ["latin"],
  weight: ["400"],
});

export default function TopSection() {
  const auth = useAuth();
  const user = auth?.user

  return (
    <div className="w-full h-screen px-6 sm:px-12 lg:px-[72px] bg-background flex justify-center">
      <div className="flex items-center items-center gap-[72px] max-w-[1200px]">
        <div className="flex flex-col gap-12 max-w-2xl">
          <div className="flex flex-col gap-6"> 
            <div className={cn("text-4xl max-w-3xl", TiroTelugu.className)}>
             Elevate your website's performance with AI-powered UX enhancements 
            </div>
            <div className="flex flex-col gap-3 font-medium w-full">
              <p>
                Unlock your website's full potential with intelligent feedback that improves design, usability, and conversion rates - no coding skills required
              </p>
              <p>Create an account and become a beta tester at no cost.</p> 
            </div>
          </div>
          <div className="flex gap-6">
            <Link href="/#about-us">
              <Button bg={"white"}>Learn more</Button>
            </Link>
            <Link href="/account/signup">
              <Button bg={"gradient"}>
                {!user ? "Try it out": "Go to the app"}
              </Button>
            </Link>
          </div>
        </div>
        {/*
          <div className="w-full hidden xl:block max-w-xl">
            <Image src="/usellLandingImg.png" alt="landing img" width={512} height={512} className="w-full"/>
          </div>
        */}
      </div>
    </div>
  );
}
