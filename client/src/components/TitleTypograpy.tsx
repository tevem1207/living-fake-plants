import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const TextWrapper = styled(Typography)({
  fontFamily: "bitbit",
  fontSize: "calc(18px + 3.5vmin)",
  "& span": {
    animation: "jump 4s infinite 0.5s",
    display: "inline-block",
    marginLeft: "2px",
  },
  "& span:nth-of-type(1)": {
    animationDelay: "0s",
  },
  "& span:nth-of-type(2)": {
    animationDelay: "0.1s",
  },
  "& span:nth-of-type(3)": {
    animationDelay: "0.2s",
  },
  "& span:nth-of-type(4)": {
    animationDelay: "0.3s",
    marginRight: "10px",
  },
  "& span:nth-of-type(5)": {
    animationDelay: "0.9s",
  },
  "& span:nth-of-type(6)": {
    animationDelay: "1.0s",
  },
  "& span:nth-of-type(7)": {
    animationDelay: "1.1s",
  },
  "& span:nth-of-type(8)": {
    animationDelay: "1.2s",
  },
  "@keyframes jump": {
    "0%": {},
    "4%": {
      transform: "translateY(-15px)",
    },
    "8%": {
      transform: "translateY(0px)",
    },
  },
});

const TitleTypography = () => {
  return (
    <TextWrapper>
      <span>살</span>
      <span>아</span>
      <span>있</span>
      <span>는 </span>
      <span>가</span>
      <span>짜</span>
      <span>식</span>
      <span>물</span>
    </TextWrapper>
  );
};

export default TitleTypography;
