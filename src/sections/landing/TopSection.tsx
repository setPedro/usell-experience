import Button from "@/components/Button";
import { cn } from "@/utils/cn";
import { Tiro_Telugu } from "next/font/google";

const TiroTelugu = Tiro_Telugu({
  subsets: ["latin"],
  weight: ["400"],
});

export default function TopSection() {
  return (
    <div className="w-full h-screen lg:px-9 flex items-center gap-[72px]">
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
          <Button bg={"white"}>Learn more</Button>
          <Button bg={"gradient"}>Try it out</Button>
        </div>
      </div>

      <div className="w-full hidden xl:block">
        <img src="usellLandingImg.png" alt="landing img" />
      </div>
    </div>
  );
}
