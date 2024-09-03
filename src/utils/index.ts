import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateId(): string {
  let id = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

export function formatURL(input: string) {
  let websiteName = input;
  if (websiteName.slice(0, 8) === "https://") {
    websiteName = websiteName.slice(8, websiteName.length);
  }
  if (websiteName.endsWith("/")) {
    websiteName = websiteName.slice(0, -1);
  }
  return websiteName;
}
