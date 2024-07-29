"use client";

import Button from "@/components/Button";
import Logo from "../../components/Icons/Logo";
import { useState } from "react";
import BurgerMenu from "@/components/Icons/BurgerMenu";
import { NavBarModal } from "./NavBarModal";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import Link from "next/link";
import WhiteLogo from "@/components/Icons/WhiteLogo";

export default function NavBar() {
  const [navBarModalIsOpen, setNavBarModalIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 py-6 px-2 sm:px-4 md:px-6 lg:px-9 z-50",
        pathname === "/" && "w-full"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between py-3 px-4 lg:py-4 lg:px-6 rounded border-background text-background",
          pathname !== "/"
            ? "bg-darkbackground border-2 border-darkbackground"
            : "bg-foreground border-2"
        )}
      >
        {pathname === "/" ? (
          <>
            <div className="flex items-center gap-3">
              <Logo />
              <p className="font-semibold">uSell Experience</p>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <Button bg="nav">About us</Button>
              <Button bg="nav">How to use</Button>
              <Button bg="nav">Our solution</Button>
              <Button bg="nav">Who we help</Button>
              <Button bg="gradient">Contact us</Button>
            </div>

            <div
              className="py-2 hover:opacity-60 block lg:hidden"
              onClick={() => setNavBarModalIsOpen(!navBarModalIsOpen)}
            >
              <BurgerMenu />
            </div>
          </>
        ) : (
          <Link href="/" className="flex items-center gap-3 h-10">
            <WhiteLogo />
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
