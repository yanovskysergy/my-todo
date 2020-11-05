import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import {
  closeNavigation,
  openNavigation,
} from "../../store/actions/navigation";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
  Toolbar,
} from "@material-ui/core";
import Logo from "../sharedComponents/Logo/Logo";
import { Home, ListAlt, Menu, MenuOpen } from "@material-ui/icons";
import { routes } from "../../Containers/Content/Content";

import { StoreState } from "../../store/reducers";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

import style from "./navigation.module.scss";

const iconsForRoute = {
  overview: Home,
  todo: ListAlt,
};

interface NavigationItem {
  id: string;
  name: string;
  path: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
}

const navigationList = routes.map(
  ({ id, name, path }): NavigationItem => {
    // @ts-ignore
    return { id, name, path, Icon: iconsForRoute[id] };
  }
);

export const ButtonNavigation = () => {
  const state = useSelector((state: StoreState) => state.navigation);
  const dispatch = useDispatch();

  const onClick = () => {
    return dispatch(state.open ? closeNavigation() : openNavigation());
  };

  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={onClick}
    >
      {state.open ? <MenuOpen /> : <Menu />}
    </IconButton>
  );
};

export default () => {
  const state = useSelector((state: StoreState) => state.navigation);
  const dispatch = useDispatch();

  const onClick = (path: string) => {
    return () => {
      dispatch(push(path));
      dispatch(closeNavigation());
    };
  };

  return (
    <Drawer
      variant="temporary"
      onClose={() => dispatch(closeNavigation())}
      open={state.open}
      PaperProps={{ className: style["navigation"] }}
    >
      <AppBar color="primary" position="sticky">
        <Toolbar>
          <ButtonNavigation />
          <Logo />
        </Toolbar>
      </AppBar>
      <List>
        {navigationList.map(({ id, name, path, Icon }) => (
          <ListItem onClick={onClick(path)} key={id} button>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
