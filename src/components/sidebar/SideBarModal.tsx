"use client";

import WhiteLogo from "@/components/icons/WhiteLogo";
import { cn } from "@/utils/cn";
import Link from "next/link";
import DisplayWeb from "./webName/DisplayWeb";
import { Lato } from "next/font/google";

type Props = {
  onClose: () => void;
};
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export const SideBarModal: React.FC<Props> = ({ onClose }) => {
  const handleUserModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/60 flex items-start justify-start"
      onClick={handleUserModalClick}
    >
      <div className="h-screen fixed w-64 flex flex-col items-center justify-between p-6 bg-sidebarbackground">
        <div className="flex flex-col w-full items-center gap-6">
          <Link href="/" className=" flex items-center gap-2 w-min">
            <WhiteLogo />
            <p className="font-semibold text-sm">uSell Experience</p>
          </Link>
          <div className="w-full text-center px-4 py-2 rounded-md font-bold bg-foreground text-background">
            New Review
          </div>
          <div className={cn(lato.className, "flex flex-col gap-3 w-full")}>
            <DisplayWeb isSelected={true}>
              <p className="font-bold text-base">mktclock.com</p>
              <p className="text-gray font-medium text-xs">4h ago</p>
            </DisplayWeb>
            <DisplayWeb>
              <p className="font-bold text-base">ember.finance</p>
              <p className="text-gray font-medium text-xs">4h ago</p>
            </DisplayWeb>
            <DisplayWeb>
              <p className="font-bold text-base">chartoday.com</p>
              <p className="text-gray font-medium text-xs">4h ago</p>
            </DisplayWeb>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5">
          <p className="w-4 h-4 border"></p>
          <p className={cn(lato.className)}>config.json</p>
        </div>
        {/* lg:hidden sidebar */}
      </div>
    </div>
  );
};
