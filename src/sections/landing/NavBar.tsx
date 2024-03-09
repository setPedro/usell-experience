"use client";

import Button from "@/components/Button";
import Logo from "../../components/icons/Logo";
import { useState } from "react";
import BurguerMenu from "@/components/icons/BurguerMenu";
import { NavBarModal } from "./NavBarModal";

export default function NavBar() {
  const [navBarModalIsOpen, setNavBarModalIsOpen] = useState<boolean>(false);
  return (
    <nav className="w-full fixed top-0 left-0 py-6 px-9 text-foreground">
      <div className="flex items-center justify-between py-2 px-4 lg:py-4 lg:px-6 rounded border-2 border-background bg-foreground text-background">
        <div className="flex items-center gap-3">
          <Logo />
          <p className="font-semibold ">uSell Experience</p>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <Button bg="nav">About us</Button>
          <Button bg="nav">How to use</Button>
          <Button bg="nav">Our solution</Button>
          <Button bg="nav">Who we help</Button>
          <Button bg={"gradient"}>Contact us</Button>
        </div>

        <div
          className="py-2 hover:opacity-60 block lg:hidden"
          onClick={() => setNavBarModalIsOpen(!navBarModalIsOpen)}
        >
          <BurguerMenu />
        </div>
      </div>
      {navBarModalIsOpen && (
        <NavBarModal onClose={() => setNavBarModalIsOpen(!navBarModalIsOpen)} />
      )}
    </nav>
  );
}
