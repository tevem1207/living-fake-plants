import { Box, PaletteMode } from "@mui/material";
import Plant from "components/Plant";
import useInterval from "hooks/useInterval";
import { Pot as PotType } from "utils/types";
import potBottom from "assets/imgs/pot_bottom.png";
import potTop from "assets/imgs/pot_top.png";

interface PotProps {
  pot: PotType;
  growPot: (isRain: boolean) => Promise<void>;
  mode: PaletteMode;
}

const Pot = ({ pot, growPot, mode }: PotProps) => {
  useInterval(() => {
    growPot(mode === "dark" ? true : false);
  }, 10000);

  return (
    <Box
      position={"relative"}
      sx={{
        "&:before": {
          content: "''",
          display: "block",
          position: "absolute",
          top: "calc(var(--pot-img-size) * 0.29)",
          left: "calc(-1 * var(--pot-img-size) * 0.43)",
          width: "calc(var(--pot-img-size) * 0.74)",
          height: "calc(var(--pot-img-size) * 0.2)",
          transform: "rotate( 1deg )",
          borderRadius: "50%",
          bgcolor: "rgba(0, 0, 0, 0.4)",
          filter: "blur(2px)",
        },
      }}
    >
      <img className="pixel-img pot" src={potTop} alt="pot-top" />
      {pot && <Plant pot={pot} />}
      <img className="pixel-img pot" src={potBottom} alt="pot-bottom" />
    </Box>
  );
};

export default Pot;
