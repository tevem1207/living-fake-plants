import { Dispatch, SetStateAction } from "react";
import { Box, Switch, styled, PaletteMode } from "@mui/material";
import sun from "assets/imgs/sun.svg";
import rain from "assets/imgs/rain.svg";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 64,
  height: 34,
  padding: 4,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(2px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(28px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${sun})`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.primary.main,
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "20px",
      backgroundImage: `url(${rain})`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 14,
  },
}));

interface WeatherSwitchProps {
  mode: PaletteMode;
  setMode: Dispatch<SetStateAction<PaletteMode>>;
}
const WeatherSwitch = ({ mode, setMode }: WeatherSwitchProps) => {
  const handleChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Box position="absolute" top="23px" right="20px">
      <MaterialUISwitch
        checked={mode === "light" ? true : false}
        onChange={handleChange}
      />
    </Box>
  );
};

export default WeatherSwitch;
