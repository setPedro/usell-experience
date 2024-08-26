import { useAuth } from "@/context/FirebaseContext";
import Modal from "../Modal";
import Image from "next/image";
import Button from "../Button";

type Props = {
  onClose: () => void;
};

export default function ProfileModal({ onClose }: Props) {
  const auth = useAuth();
  const user = auth?.user;
  const logOut = auth?.logOut;

  if (!user) {
    return;
  }

  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col gap-3 items-center w-full">
        <Image
          src={user.photoURL || "/defaultPicture.png"}
          className="rounded-md"
          alt="pfp"
          width={48}
          height={48}
        />
        <p className="text-xl font-semibold">
          {user.displayName || user.email}
        </p>
      </div>
      <Button bg="none" className="bg-red-500" onClick={logOut}>
        Log out
      </Button>
    </Modal>
  );
}
