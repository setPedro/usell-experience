"use client"

import NavBar from "@/sections/landing/NavBar";
import AboutUs from "@/sections/landing/AboutUs";
import TopSection from "@/sections/landing/TopSection";
import FirstSection from "@/sections/landing/FirstSection";
import LastSection from "@/sections/landing/LastSection";
import { useEffect, useRef } from "react";
import useHash from "@/hooks/useHash";
import Footer from "@/sections/landing/Footer";
import HowToUse from "@/sections/landing/HowToUse";

export default function Home() {

  const aboutUsRef = useRef<HTMLDivElement>(null)
  const howToUSeRef = useRef<HTMLDivElement>(null)
  const lastSectionRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const hash = useHash()

  useEffect(() => {
    switch (hash) {
      case '#about-us':
        aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case '#how-to-use':
        howToUSeRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case '#our-solution':
        lastSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case '#contact':
        footerRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
    } 
  }, [hash])

  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <TopSection />
      </div>
     <div> 
        <FirstSection />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={howToUSeRef}>
        <HowToUse/>
      </div>
      <div ref={lastSectionRef}>
        <LastSection  />
      </div>
      <div ref={footerRef}>
        <Footer/>
      </div>
    </main>
  );
}
