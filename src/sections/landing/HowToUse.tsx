import { cn } from "@/utils/cn";
import { Tiro_Telugu } from "next/font/google";

const TiroTelugu = Tiro_Telugu({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HowToUse() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-6 px-6 py-8 sm:p-[48px] lg:p-[72px] bg-white text-background">
      <div className={cn("text-5xl", TiroTelugu.className)}>
        How to use our <span className="text-indigo">software</span> for maximum <span className="text-indigo">results</span>
      </div>
      <div className="flex flex-col gap-3">
        <p>
          Our software’s interfact is simple and doesn’t need any tutorial. You
          type the link to a specfici page of your website, and our technology
          does the work for you.
        </p>
        <p>
          It will show a preview of your design, then our AI will analyze it and
          tell you what needs to be improved, your design and usability scores,
          and it will dive into deep details about how the changes should be
          done
        </p>
        <p>
          After that, you can type prompts such as “Give an overall impression
          of the website’s design and layout”, “Review the use of images,
          headlines and call-to-action elements”.
        </p>
      </div>
    </div>
  );
}
