import Image from "next/image"
import { Tiro_Telugu } from "next/font/google"
import { cn } from "@/utils/cn";
import Link from "next/link";

const TiroTelugu = Tiro_Telugu({
    subsets: ["latin"],
    weight: ["400"],
  });

export default function Footer() {

    return (
        <div className="flex flex-col md:flex-row gap-12 px-6 py-4 sm:px-9 sm:py-6 lg:px-[72px] lg:py-9 bg-white text-background items-center md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-x-6 gap-y-2 items-center">
              <Link href={"/"}>
                  <p className="hover:underline w-fit">Home</p>
              </Link>
              <Link href={"/#about-us"}>
                  <p className="hover:underline w-fit">About us</p>
              </Link>
              <Link href={"/#how-to-use"}>
                  <p className="hover:underline w-fit">How to use</p>
              </Link>
              <Link href={"/#our-solution"}>
                  <p className="hover:underline w-fit">Our solution</p>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-2">
              <p className="text-lg font-semibold">Contact Us</p>
              <p>+40 752 092 526</p>
              <p>eusebius.alexa03@gmail.com</p>
            </div>
          </div>
          <Link href={"/"} className="flex items-center gap-[11px]">
            <Image src={"/icons/logo.svg"} width={24} height={24} alt="logo"/>
            <p className="font-semibold text-sm">uSell Experience</p>
          </Link>
        </div>
    )
}