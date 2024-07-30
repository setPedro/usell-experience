"use client";

import NavBar from "@/sections/landing/NavBar";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/FirebaseContext";
import UnprotectedRoute from "@/components/unprotectedRoute";
import Button from "@/components/Button";
import Image from "next/image";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [emptyFields, setEmptyFields] = useState(false);

  const auth = useAuth();

  const handleSignUp = async () => {
    try {
      if (email && password && password.length > 7) {
        auth?.signUp(email, password, userName);
      } else {
        setEmptyFields(true);
      }
    } catch {
      console.error("Error creating user");
    }
  };

  const handleSignUpWithGoogle = () => {
    auth.googleSignIn();
  };

  return (
    <UnprotectedRoute>
      <div className="flex flex-col items-center justify-center h-screen bg-darkbackground">
        <NavBar />
        <div className="mt-10 sm:mt-0 px-4 sm:px-8 py-6 rounded-lg bg-foreground text-darkbackground w-96">
          <p className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Create account
          </p>
          {emptyFields && (
            <p className="text-lightpurple">
              Please, fill in all required fields.
            </p>
          )}
          <form className="flex flex-col gap-6" method="post" onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}>
            <div>
              <div className="text-sm font-semibold mb-2">
                Username (optional)
              </div>
              <input
                className="text-custom-gray w-full p-3 border border-gray-300 rounded focus:outline-none font-semibold"
                type="username"
                onChange={(e) => setUserName(e.target.value)}
                id="username"
                autoComplete="username"
              />
            </div>
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
            <div className="flex flex-col gap-4">
              <button type="submit">
                <Button bg="gradient" onClick={handleSignUp}>
                Sign up
                </Button>
              </button>
              <Button bg="none" onClick={handleSignUpWithGoogle}>
                <Image src={"/icons/googleLogo.svg"} width={24} height={24} alt="google logo"/>
                <p>Sign up with Google</p>
              </Button>
            </div>
            <div className="flex justify-center gap-1 text-sm">
              <p>Already have an account?</p>
              <Link
                href="/account/login"
                className="hover:text-lightpurple hover:underline"
              >
                Log in here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </UnprotectedRoute>
  );
}
