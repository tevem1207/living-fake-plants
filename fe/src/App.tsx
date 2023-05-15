import { useEffect, createContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ThemeProvider, Container, Box } from "@mui/material";
import useTheme from "hooks/useTheme";
import Home from "views/Home";
import SignIn from "views/SignIn";
import useAuth from "hooks/useAuth";

function App() {
  const navigate = useNavigate();
  const { user, setUser, onAuthChanged } = useAuth();
  const { theme, colorMode } = useTheme();

  useEffect(() => {
    onAuthChanged((user) => {
      if (user) {
        setUser(user);
        navigate("/");
      } else {
        navigate("/signin");
      }
      setScreenSize();
      window.addEventListener("resize", setScreenSize);

      return () => window.removeEventListener("resize", setScreenSize);
    });
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: "background.default" }}>
          <Container
            maxWidth="md"
            sx={{
              height: "calc(var(--vh, 1vh) * 100)",
              display: "flex",
              position: "relative",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "text.primary",
            }}
          >
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const ColorModeContext = createContext({ toggleColorMode: () => {} });
const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

export default App;
