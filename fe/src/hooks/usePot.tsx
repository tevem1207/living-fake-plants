import { useEffect, useState } from "react";
import { growPot } from "apis/apis";
import { Pot } from "utils/types";

const usePot = () => {
  const [pot, setPot] = useState<Pot>();

  useEffect(() => {
    growPot();
  }, []);
  return {};
};

export default usePot;
