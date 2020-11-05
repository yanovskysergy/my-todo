import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import { ButtonNavigation } from "../Navigation/Navigation";
import Logo from "../sharedComponents/Logo/Logo";

export default () => {
  return (
    <AppBar color="primary" position="sticky">
      <Toolbar>
        <ButtonNavigation />
        <Logo />
        {/*<Breadcrumbs />*/}
      </Toolbar>
    </AppBar>
  );
};
