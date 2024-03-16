"use client";

import { cn } from "@/utils/cn";
import WhiteLogo from "../icons/WhiteLogo";
import { Lato } from "next/font/google";
import DisplayWeb from "./webName/DisplayWeb";
import WhiteBurgerMenu from "../icons/WhiteBurger";
import Link from "next/link";
import { useState } from "react";
import { SideBarModal } from "./SideBarModal";
import { useAuth } from "@/context/FirebaseContext";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export default function SideBar() {
  const [sideBarModalIsOpen, setSideBarModalIsOpen] = useState<boolean>(false);
  const auth = useAuth();
  const user = auth?.user;

  return (
    <div className="h-fit fixed lg:relative lg:h-screen border-b  lg:border-0 w-full lg:min-w-64 lg:max-w-64 flex flex-col items-center justify-between p-4 lg:p-6 bg-sidebarbackground">
      <div className="hidden lg:flex flex-col w-full items-center gap-6">
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
      <div className="hidden lg:flex items-center gap-2 px-3 py-1.5">
        <p className="w-4 h-4 border"></p>
        <p className={cn(lato.className)}>{user && user.displayName}</p>
      </div>
      {/* lg:hidden sidebar */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <Link href="/">
          <WhiteLogo />
        </Link>
        <div
          className="hover:opacity-60"
          onClick={() => setSideBarModalIsOpen(!sideBarModalIsOpen)}
        >
          <WhiteBurgerMenu />
        </div>
      </div>
      {sideBarModalIsOpen && (
        <SideBarModal
          onClose={() => setSideBarModalIsOpen(!sideBarModalIsOpen)}
        />
      )}
    </div>
  );
}
