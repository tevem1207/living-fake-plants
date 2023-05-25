import { CircularProgress } from "@mui/material";
import { User } from "firebase/auth";

const Reset = ({ user }: { user: User }) => {
  return <CircularProgress />;
};

export default Reset;
