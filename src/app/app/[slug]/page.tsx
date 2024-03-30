"use client";

import SideBar from "@/components/sidebar/SideBar";
import ProtectedRoute from "@/components/protectedRoute";
import MainApp from "@/sections/app/MainApp";
import { useAuth } from "@/context/FirebaseContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppSelector } from "@/state/store";
import { selectWebsiteValue } from "@/state/websites/selector";

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const websites = useAppSelector(selectWebsiteValue);

  useEffect(() => {
    if (websites) {
      const keys = Object.keys(websites);
      const match = keys.filter((key) => key === params.slug);

      if (keys.length === 0) {
        return;
      }

      if (match.length > 0) {
        return;
      } else {
        router.push("/app");
      }
    } else {
      router.push("/app");
    }
  }, [params.slug, websites]);

  return (
    <ProtectedRoute>
      <main className="h-screen flex bg-appbackground">
        <SideBar />
        <MainApp webId={params.slug} />
      </main>
    </ProtectedRoute>
  );
}
