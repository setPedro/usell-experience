"use client";

import { useState } from "react";
import AuthInput from "@/components/auth/AuthInput";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/utils/cn";
import { useAuth } from "@/context/FirebaseContext";

export default function SignUpLogIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
  });

  const pathname = usePathname();
  const router = useRouter();
  const auth = useAuth();

  async function handleSignUp() {
    const newErrors = {
      username: !username,
      email: !email,
      password: !password,
    };

    setErrors(newErrors);

    if (
      newErrors.username ||
      newErrors.email ||
      newErrors.password ||
      password.length < 8
    ) {
      if (password.length < 8) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: true,
        }));
      }
      return;
    }
    auth?.signUp(email, password, username);
  }

  async function handleLogIn() {
    const newErrors = {
      email: !email,
      password: !password,
    };

    setErrors((prevErrors) => ({
      ...prevErrors,
      email: newErrors.email,
      password: newErrors.password,
    }));

    if (newErrors.email || newErrors.password) {
      return;
    }
    auth?.signIn(email, password);
  }

  const handleSubmit = () => {
    if (pathname === "/account/signup") {
      handleSignUp();
    } else if (pathname === "/account/login") {
      handleLogIn();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-signuploginbg">
      <div className="flex flex-col items-center rounded-xl w-[396px] bg-white">
        <div className="flex w-full justify-between">
          <button
            className={cn(
              "py-3 w-1/2 rounded-tl-xl text-signuploginbg font-bold",
              pathname === "/account/signup" ? "bg-white" : "bg-foreground"
            )}
            onClick={() => router.push("/account/signup")}
          >
            Sign up
          </button>
          <button
            className={cn(
              "py-3 w-1/2 rounded-tr-xl text-signuploginbg font-bold",
              pathname === "/account/login" ? "bg-white" : "bg-foreground"
            )}
            onClick={() => router.push("/account/login")}
          >
            Log in
          </button>
        </div>
        <div className="w-full p-6">
          <div className="flex flex-col gap-6 items-center">
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
              {pathname === "/account/signup" && (
                <AuthInput
                  icon={"user"}
                  placeholder={"Username"}
                  value={username}
                  hasError={errors.username}
                  onInputChange={(e) => setUsername(e.target.value)}
                />
              )}
              <AuthInput
                icon={"mail"}
                placeholder={"Email"}
                value={email}
                hasError={errors.email}
                onInputChange={(e) => setEmail(e.target.value)}
              />
              <AuthInput
                icon={"padlock"}
                placeholder={"Password"}
                value={password}
                rightIcon="eye"
                hasError={errors.password}
                onInputChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button bg="gradient" className="w-full" onClick={handleSubmit}>
              {pathname === "/account/signup" ? "Sign Up" : "Log In"}
            </Button>
            <div className="flex gap-6">
              <Image
                src={"/icons/signup/googleLogo.svg"}
                width={24}
                height={24}
                alt="Google logo"
                onClick={() => auth.googleSignIn()}
              />
              <Image
                src={"/icons/signup/facebookLogo.svg"}
                width={24}
                height={24}
                alt="Facebook logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
