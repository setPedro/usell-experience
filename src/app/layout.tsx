import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils";
import { AuthContextProvider } from "@/context/FirebaseContext";
import { Providers } from "@/state/provider";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "uSell Experience",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={cn(lexend.className)}>
          <Providers>{children}</Providers>
        </body>
      </AuthContextProvider>
    </html>
  );
}
