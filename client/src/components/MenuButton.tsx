import { Dispatch, SetStateAction, useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  ListItem,
  List,
  Tooltip,
} from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import { User } from "firebase/auth";
import { Logout, Menu, Replay } from "@mui/icons-material";

interface MenuButtonProps {
  user: User | null;
  signOut: () => Promise<void>;
  resetPot: () => Promise<void>;
  snackState: {
    open: boolean;
    message: string;
  };
  setSnackState: Dispatch<
    SetStateAction<{
      open: boolean;
      message: string;
    }>
  >;
}

const MenuButton = ({
  user,
  signOut,
  resetPot,
  setSnackState,
  snackState,
}: MenuButtonProps) => {
  const [isMenu, setIsMenu] = useState(false);

  const openSnack = (snackMessage: string) => {
    console.log("open");
    setSnackState({
      open: true,
      message: snackMessage,
    });
  };

  const handleSignOut = async () => {
    await signOut();
    openSnack("로그아웃 되었습니다.");
    console.log("logout");
  };

  const handleReset = async () => {
    await resetPot();
    openSnack("초기화 되었습니다.");
    console.log("reset");
    console.log(snackState);
  };

  return (
    <Box position="absolute" top="15px" left="20px">
      <IconButton onClick={() => setIsMenu(!isMenu)}>
        <Menu fontSize="large" color="primary" />
      </IconButton>
      <Box>
        <TransitionGroup>
          {isMenu && (
            <Collapse key="menu">
              <List sx={{ padding: 0 }}>
                <ListItem disablePadding>
                  <Tooltip title="로그아웃" placement="right">
                    <IconButton
                      onClick={handleSignOut}
                      aria-label="logout"
                      sx={{ mt: 2 }}
                    >
                      <Logout fontSize="large" color="primary" />
                    </IconButton>
                  </Tooltip>
                </ListItem>
                <ListItem disablePadding>
                  <Tooltip title="다시 키우기" placement="right">
                    <IconButton
                      onClick={handleReset}
                      aria-label="reset"
                      sx={{ mt: 2 }}
                    >
                      <Replay fontSize="large" color="primary" />
                    </IconButton>
                  </Tooltip>
                </ListItem>
              </List>
            </Collapse>
          )}
        </TransitionGroup>
      </Box>
    </Box>
  );
};

export default MenuButton;
