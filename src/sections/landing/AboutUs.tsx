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
                We envision a world where any business, regardless of size budget, can optimize its website for success. Too many businesses struggle with underperforming websites, losing potential customers due to poor design or ineffective copy. 
              </div>
              <div>
                uSell Experience aims to eliminate these barriers by providing intelligent, actionable feedback that transforms ordinary websites into powerful conversion tools.
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
                uSell Experience is brought to you by a dedicated team of professionals from Web Crew, a leader in web development and AI innovation. Our team combines years of expertise in design, development, and marketing to create tools that solve real-world problems.
              </div>
              <div>
                We understand the challenges businesses face in the digital space, and our comprehensive services are designed to meet all your web-related needs. Interested in our services? Reach out to us directly to learn more. 
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
                At uSell Experience, our mission is simple: to help businesses and web professionals create websites that are not only beautiful but also highly effective. 
              </div>
              <div>
                We believe that every website has the potential to perform better, and our goal is to make top-tier UX guidance accissble to everyone. By automating the feedback process with advanced AI, we're empowering users to take control of their websites and drive real, measurable results.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
