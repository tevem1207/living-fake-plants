import { useState } from "react";
import { Box, Collapse, IconButton, ListItem, List } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import { User } from "firebase/auth";
import { Logout, Menu, AutoStories, Replay } from "@mui/icons-material";

interface MenuButtonProps {
  user: User | null;
  signOut: () => void;
  resetPot: () => Promise<void>;
}

const MenuButton = ({ user, signOut, resetPot }: MenuButtonProps) => {
  const [isMenu, setIsMenu] = useState(false);

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
                  <IconButton
                    onClick={signOut}
                    aria-label="logout"
                    sx={{ mt: 2 }}
                  >
                    <Logout fontSize="large" color="primary" />
                  </IconButton>
                </ListItem>
                <ListItem disablePadding>
                  <IconButton
                    onClick={resetPot}
                    aria-label="book"
                    sx={{ mt: 2 }}
                  >
                    <Replay fontSize="large" color="primary" />
                  </IconButton>
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
