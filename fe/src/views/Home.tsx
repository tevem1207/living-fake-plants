import { User } from "firebase/auth";
import "assets/css/Home.css";
import useAuth from "hooks/useAuth";

interface HomeProps {
  user: User | null;
}

const Home = ({ user }: HomeProps) => {
  const { logOut } = useAuth();

  return (
    <div>
      <button onClick={logOut}>로그아웃</button>
    </div>
  );
};

export default Home;
