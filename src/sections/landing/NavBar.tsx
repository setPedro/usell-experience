"use client";

import Button from "@/components/Button";
import { useState } from "react";
import { NavBarModal } from "./NavBarModal";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [navBarModalIsOpen, setNavBarModalIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 z-50 flex justify-center p-6 sm:px-12 lg:px-[72px]",
        pathname === "/" && "w-full"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between py-3 px-4 lg:py-4 lg:px-6 rounded border-background text-background w-full max-w-[1200px]",
          pathname !== "/"
            ? "bg-darkbackground border-2 border-darkbackground"
            : "bg-foreground border-2"
        )}
      >
        {pathname === "/" ? (
          <>
            <Link href={"/"} className="flex items-center gap-3">
              <Image
                src={"/icons/logo.svg"}
                width={24}
                height={24}
                alt="logo"
              />
              <p className="font-semibold">uSell Experience</p>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              <Link href={"/#about-us"}>
                <Button bg="none">About us</Button>
              </Link>
              <Link href={"/#how-to-use"}>
                <Button bg="none">How to use</Button>
              </Link>
              <Link href={"/#our-solution"}>
                <Button bg="none">Our solution</Button>
              </Link>
              <Link href={"/#contact"}>
                <Button bg="gradient">Contact us</Button>
              </Link>
            </div>

            <div
              className="py-2 hover:opacity-60 block lg:hidden"
              onClick={() => setNavBarModalIsOpen(!navBarModalIsOpen)}
            >
              <Image
                src={"/icons/burgerMenu.svg"}
                width={24}
                height={24}
                alt="menu"
              />
            </div>
          </>
        ) : (
          <Link href="/" className="flex items-center gap-3 h-10">
            <Image
              src={"/icons/whiteLogo.svg"}
              width={24}
              height={24}
              alt="logo"
            />
            <p className="font-semibold text-foreground">uSell Experience</p>
          </Link>
        )}
      </div>
      {navBarModalIsOpen && (
        <NavBarModal onClose={() => setNavBarModalIsOpen(!navBarModalIsOpen)} />
      )}
    </nav>
  );
}
