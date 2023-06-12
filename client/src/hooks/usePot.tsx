import { useEffect, useState } from "react";
import useFireStore from "./useFirestore";
import { Plant, Pot } from "utils/types";
import { arrayUnion, arrayRemove } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const usePot = (uid: string) => {
  const [pot, setPot] = useState<Pot | null>(null);
  const [potId, setPotId] = useState("");
  const { createData, readData, updateData, deleteData } = useFireStore();
  const navigate = useNavigate();

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
        return potId;
      } else {
        console.log("pot 생성 실패");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getPot = async (potId: string) => {
    try {
      const potData = await (readData("pot/" + potId) as Promise<Pot | null>);
      setPotId(potId);
      setPot(potData);
    } catch (e) {
      console.log(e);
    }
  };

  const getUserPot = async () => {
    try {
      const { pot } = (await readData("user/" + uid)) as { pot: string[] };
      if (pot && pot.length > 0) {
        getPot(pot[0]);
      } else {
        addPot(uid, "이름없음");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deletePot = async () => {
    await deleteData("pot/" + potId);
    setPot(null);
    setPotId("");
    await updateData("user/" + uid, { pot: arrayRemove(potId) });
  };

  const growPot = async (isRain: boolean) => {
    if (pot && potId) {
      const plant = (await readData("plant/" + pot?.plantId)) as Plant;
      const newGauge =
        pot.growthGauge + 20 - Math.abs(pot.potMoisture - plant.plantMoisture);
      console.log(pot);
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

  const resetPot = async () => {
    navigate("/reset");
    await deletePot();
    await addPot(uid, "이름없음");
    navigate("/");
  };

  useEffect(() => {
    console.log(pot?.growthRate);
    document.documentElement.style.setProperty(
      "--grow",
      `${pot ? pot.growthRate / 20 : 0}`
      // `calc(${pot ? pot.growthRate / 20 : 0}px * var(--pixel-img-size)))`
    );
  }, [pot]);

  return { pot, growPot, resetPot, getUserPot };
};

export default usePot;
