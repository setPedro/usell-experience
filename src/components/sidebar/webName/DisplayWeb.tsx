
import { Web, Websites } from "@/state/websites/types";
import { cn } from "@/utils/cn";
import Link from "next/link";

interface Props {
  isSelected?: boolean;
  website: Web;
  index: number;
  websites: Websites;
}

const DisplayWeb: React.FC<Props> = ({
  isSelected,
  website,
  index,
  websites,
}) => {
  const keys = Object.keys(websites);
  return (
    <Link
      href={`/app/${keys[index]}`}
      className={cn(
        "flex flex-col px-3 py-1.5",
        isSelected
          ? "rounded-lg bg-appbackground/50"
          : "rounded-lg hover:bg-appbackground/15"
      )}
    >
      <p className="font-bold text-base">{website.input}</p>
      <p className="text-gray font-medium text-xs">{website.timestamp}</p>
    </Link>
  );
};

export default DisplayWeb;
