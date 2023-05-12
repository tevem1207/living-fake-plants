import useAuth from "../hooks/useAuth";
import "assets/css/SignIn.css";
import { ReactComponent as GithubSign } from "assets/imgs/github-logo.svg";
import { ReactComponent as GoogleSign } from "assets/imgs/google-logo.svg";

const SignIn = () => {
  const { signIn, logOut } = useAuth();

  return (
    <>
      <div>
        <p className="game-title">살아있는 가짜 식물</p>
      </div>
      <div className="login-btn-container">
        <GithubSign
          className="github-login login-btn"
          onClick={() => signIn("Github")}
        />
        <GoogleSign
          className="google-login login-btn"
          onClick={() => signIn("Google")}
        />
      </div>
    </>
  );
};

export default SignIn;
