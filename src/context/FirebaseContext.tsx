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
  FacebookAuthProvider
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { FirebaseError } from "firebase/app";
import { FirebaseStorage } from "firebase/storage";
import { usePathname } from "next/navigation";

interface AuthContextProps {
  user: User | "" | null;
  signIn: (email: string, password: string) => void;
  logOut: () => void;
  signUp: (email: string, password: string, userName: string) => void;
  googleSignIn: () => void;
  error: string,
  facebookSignIn: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null | "">("");
  const [error, setError] = useState<string>("")
  const pathname = usePathname()

  // Reset error on pathname change (from sign up to log in and viceversa)
  useEffect(() => {
    setError("")
  }, [pathname])

  const facebookSignIn = async () => {
    setError("")
    try {
      const res = await signInWithPopup(auth, facebookProvider)
      setUser(res.user)
    } catch (err: any) {
      setError(err.code)
      console.error(err.code)
    }
  }

  const googleSignIn = async () => {
    setError("")
    try {
      const res = await signInWithPopup(auth, googleProvider)
      setUser(res.user)
    } catch (err) {
      const error = err as FirebaseError
      setError(error.code)
      console.error(error.code)
    }
  };

  const signUp = async (email: string, password: string, displayName: string) => {
    setError("")
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      setUser(res.user)
      updateProfile(res.user, { displayName }) 
    } catch (err) {
      const error = err as FirebaseError
      setError(error.code)
      console.log(error.code)
    }
  };

  const signIn = async (email: string, password: string) => {
    setError("")
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      setUser(res.user)
    } catch (err) {
      const error = err as FirebaseError
      setError(error.code)
      console.log(error.code)
    }
  };

  const logOut = async () => {
    await signOut(auth).catch((error) => console.log(error));
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
    facebookSignIn,
    error
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
