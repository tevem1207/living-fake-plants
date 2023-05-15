import { cactus } from "utils/plants";

const Plant = () => {
  const level = 0;
  return <img className="pixel-img" src={cactus[level]} alt="cactus" />;
};

export default Plant;
