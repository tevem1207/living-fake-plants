import useAuth from "../hooks/useAuth";
import Button from "@mui/material/Button";
import { ReactComponent as GithubSign } from "assets/imgs/github-logo.svg";
import { ReactComponent as GoogleSign } from "assets/imgs/google-logo.svg";
import "assets/css/SignIn.css";
import { bgcolor } from "@mui/system";

const SignIn = () => {
  const { signIn } = useAuth();

  return (
    <>
      <div>
        <p className="game-title">살아있는 가짜 식물</p>
      </div>
      <div className="login-btn-container">
        <Button
          variant="contained"
          sx={{ bgcolor: "info.github.background", color: "info.github.text" }}
        >
          <GithubSign
            className="github-logo login-logo"
            onClick={() => signIn("Github")}
          />
          Github로 시작하기
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "info.google.background", color: "info.google.text" }}
        >
          <GoogleSign
            className="google-logo login-logo"
            onClick={() => signIn("Google")}
          />
          Google로 시작하기
        </Button>
      </div>
    </>
  );
};

export default SignIn;
