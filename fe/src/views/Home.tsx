import { User } from "firebase/auth";
import MenuButton from "components/MenuButton";
import Pot from "components/Pot";

interface HomeProps {
  user: User | null;
  signOut: () => void;
}

const Home = ({ user, signOut }: HomeProps) => {
  return (
    <>
      <MenuButton user={user} signOut={signOut} />
      <Pot />
    </>
  );
};

export default Home;
