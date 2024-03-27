"use client";

import WhiteLogo from "../icons/WhiteLogo";
import WhiteBurgerMenu from "../icons/WhiteBurger";
import Link from "next/link";
import { useState } from "react";
import { SideBarModal } from "./SideBarModal";
import { useAuth } from "@/context/FirebaseContext";
import { Websites } from "@/sections/app/WebsiteTypes";
import { readWebsitesFromDB } from "@/services/db";

export default function SideBar() {
  const [sideBarModalIsOpen, setSideBarModalIsOpen] = useState<boolean>(false);
  const [websites, setWebsites] = useState<Websites | null>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const auth = useAuth();
  const user = auth?.user;

  //readwebsites
  if (!websites && user) {
    const fetchWebsites = async () => {
      const _websites = await readWebsitesFromDB(user);
      setWebsites(_websites);
    };
    fetchWebsites();
  }

  return (
    <div className="h-fit fixed lg:relative lg:h-screen border-b  lg:border-0 w-full lg:min-w-64 lg:max-w-64 flex flex-col items-center justify-between p-4 lg:p-6 bg-sidebarbackground">
      <div className="h-screen hidden lg:flex flex-col items-center justify-between fixed top-0 p-6 w-64">
        <SideBarModal websites={websites} isSelected={isSelected} />
      </div>

      {sideBarModalIsOpen && (
        <div
          className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/60 flex items-start justify-start"
          onClick={() => setSideBarModalIsOpen(!sideBarModalIsOpen)}
        >
          <div className="h-screen fixed w-64 flex flex-col items-center justify-between p-6 bg-sidebarbackground">
            <SideBarModal websites={websites} isSelected={isSelected} />
          </div>
        </div>
      )}
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
    </div>
  );
}
