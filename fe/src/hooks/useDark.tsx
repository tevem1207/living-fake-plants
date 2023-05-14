import { useState, useMemo } from "react";
import { PaletteMode, createTheme } from "@mui/material";
import { grey, deepOrange, yellow, brown } from "@mui/material/colors";

const useDark = () => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return { colorMode, theme };
};

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    info: {
      main: grey[100],
      github: { background: "#24292f", text: "#ffffff" },
      google: { background: "#ffffff", text: "#595959" },
    },
    ...(mode === "light"
      ? {
          primary: {
            main: brown[400],
          },
          background: {
            default: yellow[200],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: {
            main: yellow[200],
          },
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

export default useDark;
