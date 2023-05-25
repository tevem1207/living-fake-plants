import { Box, Button } from "@mui/material";
import Plant from "components/Plant";
import useInterval from "hooks/useInterval";
import { Pot as PotType } from "utils/types";
import potBottom from "assets/imgs/pot_bottom.png";
import potTop from "assets/imgs/pot_top.png";

interface PotProps {
  pot: PotType;
  growPot: (isRain: boolean) => Promise<void>;
  resetPot: () => Promise<void>;
}

const Pot = ({ pot, growPot, resetPot }: PotProps) => {
  useInterval(() => {
    growPot(false);
  }, 3000);

  return (
    <Box
      position={"relative"}
      sx={{
        "&:before": {
          content: "''",
          display: "block",
          position: "absolute",
          top: "calc(var(--pixel-img-size) * 0.28)",
          left: "calc(-1 * var(--pixel-img-size) * 0.48)",
          width: "calc(var(--pixel-img-size) * 0.86)",
          height: "calc(var(--pixel-img-size) * 0.26)",
          borderRadius: "50%",
          bgcolor: "rgba(0, 0, 0, 0.35)",
          filter: "blur(4px)",
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
