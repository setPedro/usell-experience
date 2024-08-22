import { cn } from "@/utils/cn";
import { Tiro_Telugu } from "next/font/google";

const TiroTelugu = Tiro_Telugu({
  subsets: ["latin"],
  weight: ["400"],
})

export default function HowToUse() {
  return (
        <div className="w-full flex flex-col justify-center  items-center gap-6 px-6 py-8 sm:p-[48px] lg:p-[72px] bg-white text-background">
      <div className="flex flex-col gap-6 max-w-[1200px]"> 
        <div className={cn("text-5xl", TiroTelugu.className)}>
          <span className="text-indigo">How to use our</span> software <span className="text-indigo"> for maximum </span> results 
        </div>
        <div className="flex flex-col gap-3">
          <p>
            <strong>1. Enter your webpage URL: <br></br></strong>
            Getting started with uSell Experience is simple. Just type in the URL of the webpage you want to analyze. Our AI system immediately goes to work, assessing the design, layout and content.
          </p>
          <p>
            <strong>2. Receive actionable insights<br></br></strong>
            Within moments, you'll receive a detailed report highlighting areas for improvement. Our AI evaluates your site's usability, asethetics, and overall effectiveness, offering specific suggestions to enhance each aspect.
          </p>
          <p>
             <strong>3. Implement Changes Effortlessly<br></br></strong>
             uSell Experience doesn't just tell you what to improve - it guides you on how to do it. Whether it's suggesting better colour schemes, optimizing your call-to-action buttons, or refining your copy, our tool provides step-to-step instructions. Best of all, you don't need any coding skills to make these changes. If your website is built on a platform like Wordpress, Squarespace or Wix, you can apply your suggestions with ease.
          </p>
          <p>
            <strong>4. Optimize and iterate<br></br></strong>
            Website optimization is an ongoing process. After implementing our recommendations, you can continually refine your site based on the latest insights provided by uSell Experience. The more you use the tool, the more you'll understand your audience's needs and preferences, allowing you to fine-tune your website for maximum impact.
          </p>
        </div>
      </div>
    </div>
  );
}
