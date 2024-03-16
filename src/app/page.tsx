import NavBar from "@/sections/landing/NavBar";
import AboutUs from "@/sections/landing/AboutUs";
import TopSection from "@/sections/landing/TopSection";
import HowToUse from "@/sections/landing/HowToUse";
import LastSection from "@/sections/landing/LastSection";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <TopSection />
      </div>
      <AboutUs />
      <HowToUse />
      <LastSection  />
    </main>
  );
}
