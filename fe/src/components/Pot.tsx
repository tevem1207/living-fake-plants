import { Box } from "@mui/material";
import Plant from "components/Plant";
import potBottom from "assets/imgs/pot_bottom.png";
import potTop from "assets/imgs/pot_top.png";

const Pot = () => {
  return (
    <Box position={"relative"}>
      <img className="pixel-img pot" src={potTop} alt="pot-top" />
      <Plant />
      <img className="pixel-img pot" src={potBottom} alt="pot-bottom" />
    </Box>
  );
};

export default Pot;
