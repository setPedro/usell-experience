"use client";

import SideBar from "@/components/TempSidebar";
import ProtectedRoute from "@/components/protectedRoute";
import MainApp from "@/sections/app/MainApp";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppSelector } from "@/state/store";
import {
  selectIsWebsitesLoading,
  selectWebsites,
} from "@/state/websites/selector";

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const websites = useAppSelector(selectWebsites);
  const isWebsitesLoading = useAppSelector(selectIsWebsitesLoading);

  useEffect(() => {
    if (!isWebsitesLoading) {
      const keys = Object.keys(websites);
      const match = keys.filter((key) => key === params.slug);

      if (match.length === 0) {
        router.push("/app");
      }
    }
  }, [router, params.slug, websites]);

  return (
    <ProtectedRoute>
      <main className="h-screen flex bg-appbackground">
        <SideBar />
        <MainApp webId={params.slug} />
      </main>
    </ProtectedRoute>
  );
}
