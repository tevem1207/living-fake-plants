import { User } from "firebase/auth";
import MenuButton from "components/MenuButton";
import PotView from "components/PotView";

interface HomeProps {
  user: User | null;
}

const Home = ({ user }: HomeProps) => {
  return (
    <>
      <MenuButton />
      <PotView />
    </>
  );
};

export default Home;
