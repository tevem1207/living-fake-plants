import { auth } from "utils/fireabase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  User,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const getProvider = (name: string) => {
    switch (name) {
      case "Google":
        return new GoogleAuthProvider();
      case "Github":
        return new GithubAuthProvider();
      default:
        throw new Error(`${name} is unknown provider.`);
    }
  };

  const signIn = (name: string) => {
    const provider = getProvider(name);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  const onAuthChanged = (callback: (user: User | null) => void) => {
    onAuthStateChanged(auth, (user) => callback(user));
  };

  return { user, setUser, signIn, logOut, onAuthChanged };
};

export default useAuth;
