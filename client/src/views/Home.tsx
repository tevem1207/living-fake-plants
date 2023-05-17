import { Dispatch, SetStateAction } from "react";
import { PaletteMode } from "@mui/material";
import { User } from "firebase/auth";
import MenuButton from "components/MenuButton";
import Pot from "components/Pot";
import WeatherSwitch from "components/WeatherSwitch";
import Rain from "components/Rain";

interface HomeProps {
  user: User | null;
  signOut: () => void;
  mode: PaletteMode;
  setMode: Dispatch<SetStateAction<PaletteMode>>;
}

const Home = ({ user, signOut, mode, setMode }: HomeProps) => {
  console.log(user);
  return (
    <>
      {mode === "dark" && <Rain delay={2} drops={80} />}
      {user && <Pot />}
      {mode === "dark" && <Rain delay={0.5} drops={120} />}
      <MenuButton user={user} signOut={signOut} />
      <WeatherSwitch mode={mode} setMode={setMode} />
    </>
  );
};

export default Home;
