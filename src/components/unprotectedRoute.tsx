"use client";

import { useAuth } from "@/context/FirebaseContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function UnprotectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuth();
  const user = auth?.user;

  useEffect(() => {
    if (user !== null && user !== "") {
      redirect("/app");
    }
  }, [user]);

  return <>{children}</>;
}
