import { useState, useMemo } from "react";
import { PaletteMode, createTheme } from "@mui/material";
import { grey, yellow, brown } from "@mui/material/colors";

const useTheme = () => {
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
  return { mode, setMode, colorMode, theme };
};

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    info: {
      main: grey[100],
      github: { background: "#24292f", text: "#ffffff" },
      google: { background: "#ffffff", text: "#595959", hovered: "#ededed" },
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
            success: grey[900],
          },
        }
      : {
          primary: {
            main: yellow[200],
          },
          background: {
            default: grey[800],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

export default useTheme;
