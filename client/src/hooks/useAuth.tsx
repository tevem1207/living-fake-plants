import { auth, defaultAuth } from "utils/fireabase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  User,
  signOut as logOut,
  signInWithPopup,
  getAdditionalUserInfo,
} from "firebase/auth";
import { useState, useEffect } from "react";
import useFireStore from "hooks/useFirestore";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { createDataWithId } = useFireStore();

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
      if (getAdditionalUserInfo(result)?.isNewUser) {
        console.log("new");
        createDataWithId({ pot: [] }, "user", user.uid);
      }
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
    const unsubscribe = defaultAuth.onIdTokenChanged(setUser);
    return () => unsubscribe();
  }, []);

  return { user, setUser, signIn, signOut, auth };
};

export default useAuth;
