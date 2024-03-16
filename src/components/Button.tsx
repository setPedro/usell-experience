import { cn } from "@/utils/cn";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  bg?: "white" | "gradient" | "nav" | "google" | "whiteapp" | "gradientapp";
}

const Button: React.FC<Props> = ({ children, onClick, bg }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center rounded-lg font-bold",
        bg === "white"
          ? "px-4 py-2 text-background bg-foreground"
          : bg === "gradient"
          ? "px-4 py-2 justify-center text-foreground bg-gradient-to-r from-lightpurple to-darkpurple"
          : bg === "nav"
          ? "px-4 py-2 justify-center hover:bg-skyblue"
          : bg === "google"
          ? "px-4 py-2 border border-background gap-4 hover:opacity-60"
          : bg === "whiteapp"
          ? "px-3 py-2.5 text-background hover:bg-foreground/50 font-medium bg-foreground"
          : bg === "gradientapp"
          ? "px-3 py-2.5 text-foreground hover:opacity-50 font-medium bg-gradient-to-r from-lightpurple to-darkpurple"
          : bg === undefined
          ? "hover:bg-skyblue justify-start pl-2 py-2 gap-4"
          : ""
      )}
    >
      {children}
    </div>
  );
};

export default Button;
