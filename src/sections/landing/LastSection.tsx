import Button from "@/components/Button";
import { cn } from "@/utils/cn";
import { Tiro_Telugu } from "next/font/google";
import Image from "next/image";
import Footer from "./Footer";
import Link from "next/link";

const TiroTelugu = Tiro_Telugu({
  subsets: ["latin"],
  weight: ["400"],
});

export default function LastSection() {
  return (
    <div className="w-full flex justify-center lg:gap-[72px] px-8 sm:p-12 lg:p-[72px] bg-background text-white">
      <div className="flex flex-col gap-9 max-w-[1200px]">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="min-w-[300px] lg:min-w-[552px]">
            <Image
              src="/lightbulb.png"
              alt="landing img"
              width={1024}
              height={1024}
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
              <Link href={"/account/login"}>
                <Button bg={"white"}>Log in</Button>
              </Link>
              <Link href={"/account/signup"}>
                <Button bg={"gradient"}>Get started</Button>
              </Link>
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
              <Link href={"/#contact"}>
                <Button bg={"gradient"}>Contact us</Button>
              </Link>
            </div>
          </div>

          <div className="min-w-[300px] lg:min-w-[552px]">
            <Image src="/earth.png" alt="landing img" width={1024} height={1024} className="w-full h-full" />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="min-w-[300px] lg:min-w-[552px]">
            <Image src="/highFive.png" alt="landing img" width={1024} height={1024} className="w-full h-full" />
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
              <Link href={"/account/login"}>
                <Button bg={"white"}>Log in</Button>
              </Link>
              <Link href={"/account/signup"}>
                <Button bg={"gradient"}>Get started</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
