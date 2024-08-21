import { cn } from "@/utils/cn";
import { Tiro_Telugu } from "next/font/google";

const TiroTelugu = Tiro_Telugu({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HowToUse() {
  return (
    <div className="w-full flex justify-center lg:flex-row items-center gap-6 px-6 py-8 sm:p-[48px] lg:p-[72px] bg-white text-background">
      <div className="flex flex-col md:flex-row gap-6 max-w-[1200px] items-center">
        <div className={cn("text-5xl", TiroTelugu.className)}>
          <span className="text-indigo">Beyond beautiful:</span> Supercharge your site's <span className="text-indigo">performance</span> and transform clicks into <span className="text-indigo">customers</span> 
        </div>
        <div className="flex flex-col gap-3">
          <p>
            A beaurtifully designed website is not enough in today's digital landscape. You need a site that looks great and performs exceptionally - turning visitors into customers. Yet, optimizing for conversions can be a complex, time-consuming process that requires expert knowledge in design, UX, and copywriting. That's where uSell Experience comes in.  
          </p>
          <p>
            uSell Experience is an AI-driven tool designed to transform the way you approach website optimization. By analzing your web pages, it offers actionable insights and suggestions to improve design, usability, and overall user experience. Whether you're a business owner, marketer or web designer, uSell Experience is your go-to software for boosting conversion rates and enhacing site performance. 
          </p>
        </div>
      </div>
    </div>
  );
}
