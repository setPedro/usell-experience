import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="w-screen h-screen bg-appbackground/70 flex items-center justify-center absolute top-0 left-0"
      onClick={handleModalClick}
    >
      <div className="bg-sidebarbackground rounded-lg w-96 flex flex-col gap-6 p-6">
        {children}
      </div>
    </div>
  );
}
