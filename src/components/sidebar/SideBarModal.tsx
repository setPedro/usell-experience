"use client";

import WhiteLogo from "@/components/icons/WhiteLogo";
import Link from "next/link";
import DisplayWeb from "./webName/DisplayWeb";
import { useAuth } from "@/context/FirebaseContext";
import { useAppSelector } from "@/state/store";
import { selectWebsites } from "@/state/websites/selector";

type Props = {
  isSelected: boolean;
};

export const SideBarModal: React.FC<Props> = ({ isSelected }) => {
  const auth = useAuth();
  const user = auth?.user;
  const websites = useAppSelector(selectWebsites);

  return (
    <>
      <div className="overflow-y-auto flex flex-col w-full items-center gap-6">
        <Link href="/" className=" flex items-center gap-2 w-min">
          <WhiteLogo />
          <p className="font-semibold text-sm">uSell Experience</p>
        </Link>
        <div className="w-full text-center px-4 py-2 rounded-md font-bold bg-foreground text-background">
          New Review
        </div>
        <div className="flex flex-col gap-3 w-full">
          {websites
            ? Object.values(websites).map((website, index) => (
                <DisplayWeb
                  key={index}
                  website={website}
                  isSelected={isSelected}
                />
              ))
            : ""}
        </div>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5">
        <p className="w-4 h-4 border"></p>
        <p>{user && user.displayName}</p>
      </div>
    </>
  );
};
