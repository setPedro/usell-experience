import Button from "@/components/Button";
import Logo from "@/components/icons/Logo";
import WhiteLogo from "@/components/icons/WhiteLogo";

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
      <div className="h-full flex flex-col gap-6 py-4 px-6 rounded-r bg-darkbackground text-foreground">
        <p className="flex justify-center border-b pb-4">
          <WhiteLogo />
        </p>
        <div className="flex flex-col gap-6 h-full">
          <Button>About us</Button>
          <Button>How to use</Button>
          <Button>Our solution</Button>
          <Button>Who we help</Button>
          <div className="mt-auto">
          <Button bg={"gradient"}>Contact us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
