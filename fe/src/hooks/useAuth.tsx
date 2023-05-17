import { auth } from "utils/fireabase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  User,
  signOut as logOut,
  signInWithPopup,
  signInWithCustomToken,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "http";

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

  const signIn = async (name: string) => {
    try {
      navigate(`/redirect?provider=${name}`);
      const provider = getProvider(name);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
      localStorage.setItem("lfptoken", token);
      setUser(user);
    } catch (error) {
      console.log("Google 로그인 실패:", error);
    }
  };

  const signOut = async () => {
    try {
      await logOut(auth);
      setUser(null);
      navigate("/signin");
    } catch (error) {
      console.log("로그아웃 실패:", error);
    }
  };

  useEffect(() => {
    console.log(localStorage);
  });
  return { user, setUser, signIn, signOut, auth };
};

export default useAuth;
