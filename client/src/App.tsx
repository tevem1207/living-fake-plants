import { useEffect, createContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ThemeProvider, Container, Box } from "@mui/material";
import useTheme from "hooks/useTheme";
import Home from "views/Home";
import SignIn from "views/SignIn";
import Redirect from "views/Redirect";
import useAuth from "hooks/useAuth";
import Reset from "views/Reset";

function App() {
  const { user, setUser, signIn, signOut } = useAuth();
  const { mode, setMode, theme, colorMode } = useTheme();

  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("resize", setScreenSize);

    return () => window.removeEventListener("resize", setScreenSize);
  }, []);

  useEffect(() => {
    if (user) {
      setUser(user);
      navigate("/");
    } else {
      navigate("/signin");
    }
  }, [user]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: "background.default",
            transition: "background ease 500ms",

            // backgroundImage: mode === "dark" ? `url(${rainGif})` : "",
          }}
        >
          <Container
            maxWidth="sm"
            sx={{
              height: "calc(var(--vh, 1vh) * 100)",
              display: "flex",
              position: "relative",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "text.primary",
              overflow: "hidden",
            }}
          >
            <Routes>
              {user && (
                <>
                  <Route
                    path="/"
                    element={
                      <Home
                        user={user}
                        signOut={signOut}
                        mode={mode}
                        setMode={setMode}
                      />
                    }
                  />
                  <Route path="/reset" element={<Reset user={user} />} />
                </>
              )}

              <Route path="/signin" element={<SignIn signIn={signIn} />} />
              <Route path="/redirect" element={<Redirect user={user} />} />
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
