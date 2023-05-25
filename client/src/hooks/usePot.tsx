import { useEffect, useState } from "react";
import useFireStore from "./useFirestore";
import { Plant, Pot } from "utils/types";
import { arrayUnion } from "firebase/firestore";

const usePot = (uid: string) => {
  const [pot, setPot] = useState<Pot>();
  const [potId, setPotId] = useState("");
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
      if (potId) {
        updateData("user/" + uid, { pot: arrayUnion(potId) });
        setPotId(potId);
        setPot(pot);
      } else {
        console.log("pot 생성 실패");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getPot = async (potId: string) => {
    try {
      const potData = await (readData("pot/" + potId) as Promise<
        Pot | undefined
      >);
      setPotId(potId);
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

  const growPot = async (isRain: boolean) => {
    if (pot && potId) {
      const plant = (await readData("plant/" + pot?.plantId)) as Plant;
      const newGauge =
        pot.growthGauge + 20 - Math.abs(pot.potMoisture - plant.plantMoisture);
      await updateData("pot/" + potId, {
        potMoisture: isRain
          ? pot.potMoisture < 20
            ? pot.potMoisture + 1
            : 20
          : pot.potMoisture > 0
          ? pot.potMoisture - 1
          : 0,
        growthRate:
          newGauge >= 100
            ? pot.growthRate < 10
              ? pot.growthRate + 1
              : 10
            : pot.growthRate,
        growthGauge: newGauge % 100,
      });
      await getPot(potId);
    } else {
      console.log("화분이 없습니다.");
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
  return { pot, growPot };
};

export default usePot;
