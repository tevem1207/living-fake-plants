import { Box, Button } from "@mui/material";
import Plant from "components/Plant";
import potBottom from "assets/imgs/pot_bottom.png";
import potTop from "assets/imgs/pot_top.png";
import usePot from "hooks/usePot";
import useInterval from "hooks/useInterval";

const Pot = ({ uid }: { uid: string }) => {
  const { pot, growPot } = usePot(uid);
  useInterval(() => {
    growPot(false);
    console.log(pot?.potMoisture, pot?.growthGauge, pot?.growthRate);
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
      <Button
        variant="contained"
        size="large"
        sx={{
          width: 150,
          position: "absolute",
          top: "calc(2 * var(--pixel-img-size) / 2)",
          left: -75,
          fontFamily: "bitbit",
          fontSize: "calc(12px + 1.2vmin)",
        }}
      >
        다시 키우기
      </Button>
    </Box>
  );
};

export default Pot;
