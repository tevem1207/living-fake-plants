import { useEffect, useState } from "react";
import useFireStore from "./useFirestore";
import { Pot } from "utils/types";
import { arrayUnion } from "firebase/firestore";

const usePot = (uid: string) => {
  const [pot, setPot] = useState<Pot>();
  const { createData, readData, updateData, deleteData } = useFireStore();

  const addPot = async (uid: string, potName: string) => {
    try {
      const pot = {
        plantId: "0",
        userId: uid,
        potName: potName,
        potMoisture: 0,
        createdAt: new Date(),
        accessTime: 0,
        growthRate: 0,
        growthGauge: 0,
      };
      const potId = await createData(pot, "pot");
      updateData("user/" + uid, { pot: arrayUnion(potId) });
      setPot(pot);
    } catch (e) {
      console.log(e);
    }
  };

  const getPot = async (potId: string) => {
    try {
      const potData = await (readData("pot/" + potId) as Promise<
        Pot | undefined
      >);
      setPot(potData);
    } catch (e) {
      console.log(e);
    }
  };

  const getUserPot = async (uid: string) => {
    try {
      const potData = (await readData("user/" + uid)) as { pot: string[] };
      return potData;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserPot(uid).then((res) => {
      if (res?.pot && res.pot.length > 0) {
        getPot(res.pot[0]);
      } else {
        addPot(uid, "이름없음");
      }
    });
  }, []);
  return { pot };
};

export default usePot;
