"use client";

import Link from "next/link";
import { useState } from "react";
import SidebarModal from "./SidebarModal";
import Image from "next/image";

export default function SideBar() {
  const [sideBarModalIsOpen, setSideBarModalIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="h-fit fixed lg:relative lg:h-screen border-b lg:border-0 w-full lg:min-w-64 lg:max-w-64 flex flex-col items-center justify-between lg:p-6">
      <div className="h-screen hidden lg:flex flex-col items-center justify-between fixed top-0 p-6 w-64 bg-sidebarbackground">
        <SidebarModal isSelected={isSelected} />
      </div>

      {sideBarModalIsOpen && (
        <div
          className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/60 flex items-start justify-start"
          onClick={() => setSideBarModalIsOpen(!sideBarModalIsOpen)}
        >
          <div className="h-screen fixed w-64 flex flex-col items-center justify-between p-6 bg-sidebarbackground">
            <SidebarModal isSelected={isSelected} />
          </div>
        </div>
      )}
      {/* lg:hidden sidebar */}
      <div className="w-full flex justify-between items-center lg:hidden bg-sidebarbackground p-4">
        <Link href="/">
          <Image src={"/icons/whiteLogo.svg"} width={24} height={24} alt="logo"/>
        </Link>
        <div
          className="hover:opacity-60"
          onClick={() => setSideBarModalIsOpen(!sideBarModalIsOpen)}
        >
        </div>
      </div>
    </div>
  );
}
