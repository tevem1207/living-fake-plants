import { cactus } from "utils/plants";
import { Pot } from "utils/types";

interface PlantProps {
  pot: Pot;
}

const Plant = ({ pot }: PlantProps) => {
  return (
    <img className="pixel-img" src={cactus[pot.growthRate]} alt="cactus" />
  );
};

export default Plant;
