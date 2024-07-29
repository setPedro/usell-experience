import Button from "@/components/Button";
import { cn } from "@/utils/cn";
import { Tiro_Telugu } from "next/font/google";
import Image from "next/image";

const TiroTelugu = Tiro_Telugu({
  subsets: ["latin"],
  weight: ["400"],
});

export default function LastSection() {
  return (
    <div className="w-full flex flex-col gap-9 lg:gap-[72px] px-6 pt-8 sm:px-12 sm:pt-12 lg:px-[72px] lg:pt-[72px] bg-background text-white">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="min-w-[300px] lg:min-w-[552px]">
          <Image
            src="lightbulb.png"
            alt="landing img"
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className={cn("text-[40px]", TiroTelugu.className)}>
              Our mission
            </p>
            <p>
              Our mission is to help millions of businesses improve their
              website design in a manner that boosts conversions.
            </p>
            <p>
              This digital product started as a dream to automate the UX
              decision-making process, and now with the help of our team, we can
              materialize it and launch it as a tool that benefits your
              businesses
            </p>
          </div>
          <div className="flex gap-6">
            <Button bg={"white"}>Log in</Button>
            <Button bg={"gradient"}>Get started</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className={cn("text-[40px]", TiroTelugu.className)}>
              Who do we help?
            </p>
            <p>
              We help businesses of every size improve thri current
              low-converting websites to avoid becoming obsolete. On the other
              hand, we hand, we help web design agencies automate a part of
              their A/B testing process to provide better and faster results for
              their clients.
            </p>
            <p>
              Every business wants to be successful online, but not all try to
              do it properly. Let our product guide you to a bigger income.
            </p>
          </div>
          <div className="flex gap-6">
            <Button bg={"gradient"}>Contact us</Button>
          </div>
        </div>

        <div className="min-w-[300px] lg:min-w-[552px]">
          <Image src="earth.png" alt="landing img" className="w-full h-full" />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="min-w-[300px] lg:min-w-[552px]">
          <Image src="highFive.png" alt="landing img" className="w-full h-full" />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className={cn("text-[40px]", TiroTelugu.className)}>
              Why choose us?
            </p>
            <p>
              We help businesses of every size improve thri current
              low-converting websites to avoid becoming obsolete. On the other
              hand, we hand, we help web design agencies automate a part of
              their A/B testing process to provide better and faster results for
              their clients.
            </p>
            <p>
              Every business wants to be successful online, but not all try to
              do it properly. Let our product guide you to a bigger income.
            </p>
          </div>
          <div className="flex gap-6">
            <Button bg={"white"}>Log in</Button>
            <Button bg={"gradient"}>Get started</Button>
          </div>
        </div>
      </div>
      <div className="flex rounded-t-lg bg-foreground gap-12">
        <div className="flex flex-col gap-12 px-6 py-4 sm:px-9 sm:py-6 lg:px-[72px] lg:py-9 rounded-tl-lg bg-white text-background">
          <div className="flex flex-col gap-6">
            <p className={cn("text-2xl", TiroTelugu.className)}>Shortcuts</p>
            <p className="hover:underline w-fit">Home</p>
            <p className="hover:underline w-fit">About us</p>
            <p className="hover:underline w-fit">How to use</p>
            <p className="hover:underline w-fit">Our solution</p>
            <p className="hover:underline w-fit">Who we help</p>
          </div>
          <div className="flex items-center gap-[11px]">
            <Image src={"/icons/logo.svg"} width={24} height={24} alt="logo"/>
            <p className="font-semibold text-sm">uSell Experience</p>
          </div>
        </div>
        <div className="pr-6 py-4 sm:pr-9 sm:py-6 lg:pr-[72px] lg:py-9 text-background">
          <p className={cn("text-2xl", TiroTelugu.className)}>Contact us</p>
        </div>
      </div>
    </div>
  );
}
