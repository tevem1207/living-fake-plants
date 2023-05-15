import { auth } from "utils/fireabase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  User,
  onAuthStateChanged,
  signOut as logOut,
  signInWithRedirect,
} from "firebase/auth";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const getProvider = (name: string) => {
    switch (name) {
      case "google":
        return new GoogleAuthProvider();
      case "github":
        return new GithubAuthProvider();
      default:
        throw new Error(`${name} is unknown provider.`);
    }
  };

  const signIn = (name: string) => {
    navigate(`/redirect?provider=${name}`);
    const provider = getProvider(name);
    signInWithRedirect(auth, provider)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("로그인 실패!");
      });
  };

  const signOut = () => {
    logOut(auth)
      .then((res) => {
        setUser(null);
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
        alert("로그아웃 실패!");
      });
  };

  const onAuthChanged = (callback: (user: User | null) => void) => {
    onAuthStateChanged(auth, (user) => callback(user));
  };

  return { user, setUser, signIn, signOut, onAuthChanged };
};

export default useAuth;
