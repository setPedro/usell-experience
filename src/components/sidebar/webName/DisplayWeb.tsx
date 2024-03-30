import { Web } from "@/state/websites/types";
import { cn } from "@/utils/cn";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface Props {
  isSelected?: boolean;
  website: Web;
}

const DisplayWeb: React.FC<Props> = ({ isSelected, website }) => {
  dayjs.extend(relativeTime);
  const timestamp = website.timestamp; // Timestamp from the database
  const timeSince = dayjs(timestamp).fromNow();
  console.log(website.id)
  return (
    <Link
      href={`/app/${website.id}`}
      className={cn(
        "flex flex-col px-3 py-1.5",
        isSelected
          ? "rounded-lg bg-appbackground/50"
          : "rounded-lg hover:bg-appbackground/15"
      )}
    >
      <p className="font-bold text-base">{website.input}</p>
      <p className="text-gray font-medium text-xs">{timeSince}</p>
    </Link>
  );
};

export default DisplayWeb;
