import { cactus } from "utils/plants";
import { Pot } from "utils/types";

interface PlantProps {
  pot: Pot;
}

const Plant = ({ pot }: PlantProps) => {
  return (
    <img
      className="pixel-img"
      src={cactus[pot.growthRate]}
      style={{
        transform: `translateY(calc(-${
          pot.growthRate / 20
        } * var(--pixel-img-size)))`,
      }}
      alt="cactus"
    />
  );
};

export default Plant;
