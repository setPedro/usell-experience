"use client";

import { useState } from "react";
import AuthInput from "@/components/auth/AuthInput";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/utils";
import { useAuth } from "@/context/FirebaseContext";

export default function SignUpLogIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const pathname = usePathname();
  const router = useRouter();
  const auth = useAuth();

  const isSignUp = pathname == "/account/signup";

  const errors = (() => {
    const _errors = {
      password: "",
      email: "",
    };

    if (password !== "" && password.length < 8) {
      _errors.password = "Password must be 8 characters long";
    }

    if (auth.error) {
      // Error will be formatted as auth/some-error.
      // Get the second part of the string, remove the hyphens and uppercase the first letter fo the first word
      const splitError = auth.error.split("/")[1];
      const finalString = splitError.split("-");
      const upperCased = finalString[0].replace(
        finalString[0][0],
        finalString[0][0].toUpperCase()
      );
      finalString[0] = upperCased;

      _errors.email = finalString.join(" ");
    }

    return _errors;
  })();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSignUp) {
      auth.signUp(email, password, username);
    } else {
      auth.signIn(email, password);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-signuploginbg">
      <div className="flex flex-col items-center rounded-xl w-[396px] bg-white">
        <div className="flex w-full justify-between">
          <button
            className={cn(
              "py-3 w-1/2 rounded-tl-xl text-signuploginbg font-bold",
              isSignUp ? "bg-white" : "bg-foreground"
            )}
            onClick={() => router.push("/account/signup")}
          >
            Sign up
          </button>
          <button
            className={cn(
              "py-3 w-1/2 rounded-tr-xl text-signuploginbg font-bold",
              !isSignUp ? "bg-white" : "bg-foreground"
            )}
            onClick={() => router.push("/account/login")}
          >
            Log in
          </button>
        </div>
        <div className="w-full p-6">
          <form
            className="flex flex-col gap-6 items-center"
            onSubmit={handleSubmit}
            method="GET"
          >
            <Link href={"/"} className="flex items-center gap-3">
              <Image
                src={"/icons/logo.svg"}
                width={24}
                height={24}
                alt="logo"
              />
              <p className="font-semibold text-xl text-darkbackground">
                uSell Experience
              </p>
            </Link>
            <div className="flex flex-col gap-4 w-full">
              {isSignUp && (
                <AuthInput
                  icon={"user"}
                  placeholder={"Username"}
                  value={username}
                  onInputChange={(e) => setUsername(e.target.value)}
                />
              )}
              <AuthInput
                icon={"mail"}
                placeholder={"Email"}
                value={email}
                error={errors.email}
                onInputChange={(e) => setEmail(e.target.value)}
              />
              <AuthInput
                icon={"padlock"}
                placeholder={"Password"}
                value={password}
                rightIcon="eye"
                error={errors.password}
                onInputChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button bg="gradient" type="submit" className="w-full">
              {isSignUp ? "Sign Up" : "Log In"}
            </Button>
            <div className="flex gap-6">
              <Image
                src={"/icons/signup/googleLogo.svg"}
                width={24}
                height={24}
                alt="Google logo"
                className="hover:opacity-70"
                onClick={() => auth.googleSignIn()}
              />
              <Image
                src={"/icons/signup/facebookLogo.svg"}
                width={24}
                height={24}
                alt="Facebook logo"
                className="hover:opacity-70"
                onClick={() => auth.facebookSignIn()}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
