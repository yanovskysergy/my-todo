import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, IconButton, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

export default () => {
  return (
    <AppBar color="primary" position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Breadcrumbs />
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
