import { cn } from "@/utils/cn";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
}

const DisplayWeb: React.FC<Props> = ({ children, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-col px-3 py-1.5",
        isSelected
          ? "rounded-lg bg-appbackground/50"
          : "rounded-lg hover:bg-appbackground/15"
      )}
    >
      {children}
    </div>
  );
};

export default DisplayWeb;
