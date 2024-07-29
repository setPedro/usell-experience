import Button from "@/components/Button";
import Image from "next/image";

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
          <Button bg="none">About us</Button>
          <Button bg="none">How to use</Button>
          <Button bg="none">Our solution</Button>
          <Button bg="none">Who we help</Button>
          <div className="mt-auto">
            <Button bg={"gradient"}>Contact us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
