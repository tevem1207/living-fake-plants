import { Box } from "@mui/material";
import Plant from "components/Plant";
import potBottom from "assets/imgs/pot_bottom.png";
import potTop from "assets/imgs/pot_top.png";
import usePot from "hooks/usePot";
import { useEffect } from "react";

const Pot = ({ uid }: { uid: string }) => {
  const { pot } = usePot(uid);
  useEffect(() => {
    console.log(pot);
  }, [pot]);

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
      <Plant />
      <img className="pixel-img pot" src={potBottom} alt="pot-bottom" />
    </Box>
  );
};

export default Pot;
