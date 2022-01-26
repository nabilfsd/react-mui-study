import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderSection = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    console.log("drawer open", open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    console.log("drawer closed");
  };

  const dismissDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ margin: "0px" }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: "300px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "300px",
            boxSizing: "border-box",
          },
        }}
        variant='temporary'
        open={open}
        onClose={dismissDrawer(open)}
      >
        <Box>
          <IconButton
            size='large'
            edge='start'
            variant='outlined'
            color='error'
            aria-label='menu'
            onClick={handleDrawerClose}
            sx={{ ml: "15px", mt: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <List>
            <ListItem onClick={() => console.log("list 1 clicked")}>1</ListItem>
            <ListItem onClick={() => console.log("list 1 clicked")}>2</ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default HeaderSection;
