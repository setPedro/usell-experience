"use client";

import { useState } from "react";
import { useAuth } from "@/context/FirebaseContext";
import Link from "next/link";
import UnprotectedRoute from "@/components/unprotectedRoute";
import NavBar from "@/sections/landing/NavBar";
import Button from "@/components/Button";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();

  const handleSignIn = () => {
    if (email && password) {
      auth?.signIn(email, password);
      console.log("Logged in");
      console.log(auth?.signIn(email, password));
    }
  };

  return (
    <UnprotectedRoute>
      <div className="flex flex-col items-center justify-center h-screen bg-darkbackground">
        <NavBar />
        <div className="px-4 sm:px-8 py-4 rounded-lg bg-foreground text-darkbackground">
          <p className="text-3xl sm:text-4xl text-left font-bold mb-4">
            Log in
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <div className="text-sm font-semibold mb-2">Email address</div>
              <input
                className="text-custom-gray w-full p-3 border border-gray-300 rounded focus:outline-none font-semibold"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                autoComplete="email"
              />
            </div>
            <div>
              <div className="text-sm font-semibold mb-2">Password</div>
              <input
                className="text-custom-gray w-full p-3 border border-gray-300 rounded focus:outline-none font-semibold"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <Button bg="gradient" onClick={handleSignIn}>
              Log in
            </Button>
            <div className="flex justify-center gap-1 text-sm">
              <p>Haven&lsquo;t an account yet?</p>
              <Link
                href="/account/signup"
                className="hover:text-lightpurple hover:underline"
              >
                Sign up here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </UnprotectedRoute>
  );
}
