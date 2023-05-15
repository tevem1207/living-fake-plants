import { Button, Typography, Stack, SvgIcon } from "@mui/material";
import TitleTypography from "components/TitleTypograpy";
import { ReactComponent as GithubLogo } from "assets/imgs/github-logo.svg";
import { ReactComponent as GoogleLogo } from "assets/imgs/google-logo.svg";

interface SignInProps {
  signIn: (name: string) => void;
}

const SignIn = ({ signIn }: SignInProps) => {
  return (
    <>
      <TitleTypography />
      <Stack maxWidth="xs" marginY={"5%"}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "info.github.background",
            color: "info.github.text",
            textTransform: "none",
          }}
          onClick={() => signIn("Github")}
        >
          <SvgIcon component={GithubLogo} fill="#ffffff" inheritViewBox />
          <Typography marginLeft={1}>Github로 시작하기</Typography>
        </Button>
        <Button
          variant="contained"
          sx={{
            marginTop: 1,
            bgcolor: "info.google.background",
            color: "info.google.text",
            textTransform: "none",
            "&:hover": {
              bgcolor: "info.google.hovered",
            },
          }}
          onClick={() => signIn("Google")}
        >
          <SvgIcon component={GoogleLogo} inheritViewBox />
          <Typography marginLeft={1}>Google로 시작하기</Typography>
        </Button>
      </Stack>
    </>
  );
};

export default SignIn;
