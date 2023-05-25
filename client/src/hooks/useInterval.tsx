import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, interval: number) => {
  const savedCallback = useRef<(() => void) | null>(null);
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    let id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
};

export default useInterval;
