"use client";

import Button from "@/components/Button";
import { useAuth } from "@/context/FirebaseContext";
import { cn } from "@/utils/cn";
import { Tiro_Telugu } from "next/font/google";
import Link from "next/link";
import Image from "next/image"

const TiroTelugu = Tiro_Telugu({
  subsets: ["latin"],
  weight: ["400"],
});

export default function TopSection() {
  const auth = useAuth();
  const user = auth?.user

  return (
    <div className="w-full h-screen px-9 bg-background flex justify-center">
      <div className="flex items-center gap-[72px] max-w-[1200px]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6 md:w-min">
            <div className={cn("text-5xl md:w-max", TiroTelugu.className)}>
              Does your conversion rate suck?
            </div>
            <div className="flex flex-col gap-3 font-medium w-full">
              <p>
                This is your number one UX feedback and suggestions software to
                skyrocket your website’s conversion rate.
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
        <div className="w-full hidden xl:block max-w-xl">
          <Image src="/usellLandingImg.png" alt="landing img" width={512} height={512} className="w-full"/>
        </div>
      </div>
    </div>
  );
}
