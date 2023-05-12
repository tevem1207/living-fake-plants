import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "views/Home";
import SignIn from "views/SignIn";
import useAuth from "hooks/useAuth";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const { user, setUser, onAuthChanged } = useAuth();

  useEffect(() => {
    onAuthChanged((user) => {
      if (user) {
        setUser(user);
        navigate("/");
      } else {
        navigate("/signin");
      }
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
