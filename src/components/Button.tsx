import { cn } from "@/utils/cn";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  bg: "white" | "gradient" | "whiteapp" | "gradientapp" | "none";
  className?: string
  type?: "submit" | "reset" | "button" 
}

export default function Button({ children, onClick, bg, className, type }: Props) {

  const classes = {
    common: "flex gap-2 items-center justify-center rounded-lg font-bold hover:opacity-70 transition duration-400 font-medium",
    colors: {
      white: "bg-foreground text-background",
      gradient: "text-foreground bg-gradient-to-r from-lightpurple to-darkpurple",
      whiteapp: "text-background bg-foreground",
      gradientapp: "text-foreground bg-gradient-to-r from-lightpurple to-darkpurple",
      none: "",
    },
    sizes: {
      md: "px-4 py-2"
    }
  }

  return (
    <button type={type}
      onClick={onClick}
      className={cn(
          classes.common,
          classes.colors[bg],
          classes.sizes["md"],
          className
      )}
    >
      {children}
    </button>
  );
};
