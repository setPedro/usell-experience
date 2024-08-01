import { cn } from "@/utils/cn";
import { Tiro_Telugu } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const TiroTelugu = Tiro_Telugu({
  subsets: ["latin"],
  weight: ["400"],
});

export default function TopSection() {
  return (
    <div className="w-full px-6 py-8 sm:p-12 lg:p-[72px] flex justify-center bg-foreground text-background">
      <div className="max-w-[1200px] flex flex-col gap-9">
        <div className="flex flex-col lg:flex-row lg:gap-6 items-center justify-center">
          <div className={cn("text-5xl", TiroTelugu.className)}>About Us</div>
          <hr className="h-[30px] border  rotate-90 lg:rotate-0 border-background" />
          <div className="font-bold text-center lg:text-left">
            Our team provides solution to businesses just like yours
          </div>
        </div>
        <div className="flex flex-col lg:flex-row py-3 lg:py-9 border-2 rounded-lg border-background">
          <div className="flex flex-col lg:w-1/3 items-center lg:items-start px-4 lg:px-9 pb-3 lg:pb-0 gap-9 border-b-2 lg:border-b-0 lg:border-r-2 border-background">
            <Image src={"/icons/idea.svg"} width={24} height={24} alt="idea"/>
            <div className="flex flex-col gap-3">
              <div
                className={cn(
                  "text-2xl text-center lg:text-left",
                  TiroTelugu.className
                )}
              >
                Our Vision
              </div>
              <div>
                We had a vistion that our product could help underperforming
                business websites grow their true potential.
              </div>
              <div>
                By guiding you with our improving AI technology we make sure you
                get more customers from your website, no matter how much traffic
                you currently pull
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/3 items-center lg:items-start px-4 lg:px-9 py-3 lg:py-0 gap-9 border-b-2 lg:border-b-0 lg:border-r-2 border-background">
            <Image src={"/icons/idea.svg"} width={24} height={24} alt="idea"/>
            <div className="flex flex-col gap-3">
              <div
                className={cn(
                  "text-2xl text-center lg:text-left",
                  TiroTelugu.className
                )}
              >
                Who are we?
              </div>
              <div>
                We are a small team assigned by Web Crew to develop revolutionary
                AI products. We excel in web development, AI technology and
                marketing.
              </div>
              <div>
                We also offer a variety of services such as web design, logo
                design, web development, SEO, content writing and copywriting.
                Interested in any of them?{" "}
                <Link href={"/#contact"} className="text-pink cursor-pointer">Contact us here</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/3 items-center lg:items-start px-4 lg:px-9 pt-3 lg:pt-0 gap-9">
            <Image src={"/icons/idea.svg"} width={24} height={24} alt="idea"/>
            <div className="flex flex-col gap-3">
              <div
                className={cn(
                  "text-2xl text-center lg:text-left",
                  TiroTelugu.className
                )}
              >
                Our Mission
              </div>
              <div>
                Our mission is to help millions of businesses improve their
                website design in a manner that boosts conversions.
              </div>
              <div>
                This digital product started as a dream to automate the UX
                decision-making process, and now with the help of our team, we can
                materialize it and launch it as a tool that benefits your
                businesses
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
