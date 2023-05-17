import { Box } from "@mui/material";

const Drop = ({
  left,
  top,
  delay,
}: {
  left: number;
  top: number;
  delay: number;
}) => {
  return (
    <Box
      className="drop"
      sx={{
        background:
          "linear-gradient(to bottom, rgba(13,52,58,1), rgba(255,255,255,0.6))",
        width: "1px",
        height: "89px",
        left: left,
        top: top,
        bottom: "200px",
        position: "absolute",
        animation: `drop linear 6s infinite ${delay}s, fade ${delay * 2}s`,
        "@keyframes drop": {
          "95%": { opacity: 1 },
          "100%": {
            mt: "6000px",
            opacity: 0,
          },
        },
        "@keyframes fade": {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    />
  );
};

const Rain = ({ delay, drops }: { delay: number; drops: number }) => {
  // function to generate a random number range.
  function randRange(minNum: number, maxNum: number) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  }

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {Array.from(Array(drops), (x) => {
        const left = randRange(-800, 800);
        const top = randRange(-6000, 0);

        return <Drop left={left} top={top} delay={delay} />;
      })}
    </Box>
  );
};

export default Rain;
