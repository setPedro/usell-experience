"use client";

import Link from "next/link";
import SidebarModalItem from "./SidebarModaltem";
import { useAuth } from "@/context/FirebaseContext";
import { useAppSelector } from "@/state/store";
import { selectWebsites } from "@/state/websites/selector";
import Image from "next/image";
import { useState } from "react";
import ProfileModal from "./ProfileModal";

type Props = {
  isSelected: boolean;
};

export default function SidebarModal({ isSelected }: Props) {
  const auth = useAuth();
  const user = auth?.user;
  const websites = useAppSelector(selectWebsites);

  const [profileModal, setProfileModal] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full items-center gap-6 no-scrollbar overflow-y-auto">
        <Link href="/" className=" flex items-center gap-2 w-min">
          <Image
            src={"/icons/whiteLogo.svg"}
            width={24}
            height={24}
            alt="logo"
          />
          <p className="font-semibold text-sm">uSell Experience</p>
        </Link>
        <Link
          href="/app"
          className="w-full text-center px-4 py-2 rounded-md font-bold bg-foreground text-background"
        >
          New Review
        </Link>
        <div className="flex flex-col gap-3 w-full max-h-full">
          {websites
            ? Object.values(websites)
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((website, index) => (
                  <SidebarModalItem
                    key={index}
                    website={website}
                    isSelected={isSelected}
                  />
                ))
            : ""}
        </div>
      </div>
      <div
        className="flex items-center gap-2 px-3 py-1.5"
        onClick={() => setProfileModal(!profileModal)}
      >
        <Image
          src={
            user
              ? user.photoURL || "/defaultPicture.png"
              : "/defaultPicture.png"
          }
          className="rounded-md"
          alt="pfp"
          width={24}
          height={24}
        />
        <p>{user && (user.displayName || user.email)}</p>
      </div>
      {profileModal && (
        <ProfileModal onClose={() => setProfileModal(!profileModal)} />
      )}
    </>
  );
}
