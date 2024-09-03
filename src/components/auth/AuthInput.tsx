import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { cn } from "@/utils";

type AuthInputProps = {
  icon: string;
  placeholder: string;
  value: string;
  rightIcon?: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function AuthInput({
  icon,
  placeholder,
  value,
  rightIcon,
  onInputChange,
  error,
}: AuthInputProps) {
  const [inputType, setInputType] = useState<string>(
    rightIcon ? "password" : "text"
  );

  const toggleInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className="flex flex-col gap-1">
      <div
        className={cn(
          "flex items-center justify-between w-full rounded-md p-3",
          "bg-foreground",
          error ? "border border-red-500" : ""
        )}
      >
        <div className="flex gap-3 items-center w-full">
          <Image
            src={`/icons/signup/${icon}.svg`}
            width={20}
            height={20}
            alt={`${icon} icon`}
          />
          <input
            type={inputType}
            placeholder={placeholder}
            value={value}
            className="pl-3 outline-none bg-foreground text-darkbackground w-full"
            onChange={onInputChange}
          />
        </div>
        {rightIcon && (
          <Image
            src={`/icons/signup/${
              inputType === "password" ? "eyeoff" : "eye"
            }.svg`}
            width={20}
            height={20}
            alt={`${rightIcon} icon`}
            className="cursor-pointer"
            onClick={toggleInputType}
          />
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
