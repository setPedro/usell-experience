"use client";

import Button from "@/components/Button";
import { useAuth } from "@/context/FirebaseContext";
import { cn } from "@/utils";
import { Tiro_Telugu } from "next/font/google";
import Link from "next/link";

const TiroTelugu = Tiro_Telugu({
  subsets: ["latin"],
  weight: ["400"],
});

export default function TopSection() {
  const auth = useAuth();
  const user = auth?.user;

  return (
    <div className="relative w-full px-6 sm:px-12 lg:px-[72px] flex justify-center h-screen max-h-[1200px]">
      <div className="absolute w-full h-full -z-10 bg-background/60" />
      <video
        className="absolute h-full w-full object-cover -z-20 hidden lg:block"
        loop
        autoPlay
        muted
      >
        <source src="videos/desktop.mp4" type="video/mp4" />
      </video>
      <video
        className="absolute h-full w-full object-cover -z-20 lg:hidden"
        loop
        autoPlay
        muted
      >
        <source src="videos/mobile.mp4" type="video/mp4" />
      </video>
      <div className="flex items-center gap-[72px] max-w-[1200px]">
        <div className="flex flex-col gap-12 max-w-2xl">
          <div className="flex flex-col gap-6">
            <div className={cn("text-4xl max-w-3xl", TiroTelugu.className)}>
              Elevate your website&lsquo;s performance with AI-powered UX
              enhancements
            </div>
            <div className="flex flex-col gap-3 font-medium w-full">
              <p>
                Unlock your website&lsquo;s full potential with intelligent
                feedback that improves design, usability, and conversion rates -
                no coding skills required
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
                {!user ? "Try it out" : "Go to the app"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
