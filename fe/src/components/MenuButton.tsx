import { useState } from "react";
import { Box, Collapse, IconButton, ListItem, List } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import useAuth from "hooks/useAuth";
import { Logout, Menu, AutoStories } from "@mui/icons-material";

const MenuButton = () => {
  const [isMenu, setIsMenu] = useState(false);
  const { logOut } = useAuth();

  return (
    <Box position={"absolute"} top="15px" right="20px">
      <IconButton onClick={() => setIsMenu(!isMenu)}>
        <Menu fontSize="large" />
      </IconButton>
      <Box>
        <TransitionGroup>
          {isMenu && (
            <Collapse key="menu">
              <List sx={{ padding: 0 }}>
                <ListItem disablePadding>
                  <IconButton
                    aria-label="logout"
                    sx={{ mt: 2 }}
                    onClick={logOut}
                  >
                    <Logout fontSize="large" />
                  </IconButton>
                </ListItem>
                <ListItem disablePadding>
                  <IconButton aria-label="book" sx={{ mt: 2 }}>
                    <AutoStories fontSize="large" />
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
