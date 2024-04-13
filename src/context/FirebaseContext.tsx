"use client";

import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  User,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthContextProps {
  user: User | "" | null;
  signIn: (email: string, password: string) => void;
  logOut: () => void;
  signUp: (email: string, password: string, userName: string) => void;
  googleSignIn: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
const provider = new GoogleAuthProvider();

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null | "">("");

  const googleSignIn = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("There was an er:", error);
      });
  };

  const signUp = async (email: string, password: string, userName: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        updateProfile(userCredential.user, { displayName: userName });
        console.log("succesfull authentication")
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const signIn = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = async () => {
    return await signOut(auth).catch((error) => console.log(error));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [user]);

  const contextValue: AuthContextProps = {
    user,
    signIn,
    logOut,
    signUp,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside of AuthContextProvider");
  }
  return context;
};
