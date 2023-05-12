import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "views/Home";
import SignIn from "views/SignIn";
import useAuth from "hooks/useAuth";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const { user, setUser, onAuthChanged } = useAuth();
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

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
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
