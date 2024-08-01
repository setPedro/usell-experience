import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

type Props = {
  onClose: () => void;
};

export const NavBarModal: React.FC<Props> = ({ onClose }) => {
  const handleUserModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/60 flex items-start justify-start"
      onClick={handleUserModalClick}
    >
      <div className="h-full flex flex-col gap-6 p-6 rounded-r bg-darkbackground text-foreground">
        <p className="flex justify-center border-b pb-4">
        <Image src={"/icons/whiteLogo.svg"} width={24} height={24} alt="logo"/>
        </p>
        <div className="flex flex-col gap-6 h-full">
          <Link href={"/#about-us"}>
            <Button bg="none">About us</Button>
          </Link>
          <Link href={"/#how-to-use"}>
            <Button bg="none">How to use</Button>
          </Link>
          <Link href={"/#our-solution"}>
            <Button bg="none">Our solution</Button>
          </Link>
          <Link href={"/#contact"} className="mt-auto">
            <Button bg={"gradient"}>Contact us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
