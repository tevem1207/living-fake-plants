import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "firebase/auth";
import { CircularProgress } from "@mui/material";

interface RedirectProps {
  user: User | null;
}

const Redirect = ({ user }: RedirectProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return <CircularProgress />;
};

export default Redirect;
