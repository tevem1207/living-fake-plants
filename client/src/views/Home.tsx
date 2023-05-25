import { Dispatch, SetStateAction, useEffect } from "react";
import { PaletteMode } from "@mui/material";
import { User } from "firebase/auth";
import MenuButton from "components/MenuButton";
import Pot from "components/Pot";
import WeatherSwitch from "components/WeatherSwitch";
import Rain from "components/Rain";
import usePot from "hooks/usePot";

interface HomeProps {
  user: User;
  signOut: () => void;
  mode: PaletteMode;
  setMode: Dispatch<SetStateAction<PaletteMode>>;
}

const Home = ({ user, signOut, mode, setMode }: HomeProps) => {
  const { pot, growPot, resetPot, getUserPot } = usePot(user.uid);

  useEffect(() => {
    getUserPot();
  }, []);

  return (
    <>
      {mode === "dark" && <Rain delay={2} drops={80} />}
      {user && pot && <Pot pot={pot} growPot={growPot} resetPot={resetPot} />}
      {mode === "dark" && <Rain delay={0.5} drops={120} />}
      <MenuButton user={user} signOut={signOut} resetPot={resetPot} />
      <WeatherSwitch mode={mode} setMode={setMode} />
    </>
  );
};

export default Home;
