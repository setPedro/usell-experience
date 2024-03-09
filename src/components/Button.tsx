import { cn } from "@/utils/cn";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  bg?: "white" | "gradient" | "nav";
}

const Button: React.FC<Props> = ({ children, onClick, bg }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center py-2 rounded-lg font-bold ",
        bg === "white"
          ? "justify-center text-background bg-foreground px-4"
          : bg === "gradient"
          ? "justify-center bg-gradient-to-r from-lightpurple to-darkpurple text-foreground px-4"
          : bg === "nav"
          ? "hover:bg-skyblue justify-center px-4"
          : bg === undefined
          ? "hover:bg-skyblue justify-start pl-2"
          : ""
      )}
    >
      {children}
    </div>
  );
};

export default Button;
