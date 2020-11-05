import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import Todo from "../../components/content/Todo/Todo";
import Overview from "../../components/content/Overview/Overview";
import style from "./content.module.scss";
import { useSelector } from "react-redux";
import { StoreState } from "../../store/reducers";

export interface RouteInterface {
  id: string;
  Component: JSX.Element;
  path: string;
  name: string;
}

export const routes = [
  {
    id: "overview",
    Component: Overview,
    path: "/",
    name: "Overview",
  },
  {
    id: "todo",
    Component: Todo,
    path: "/todo",
    name: "Todo",
  },
];

export default () => {
  const routerState = useSelector((state: StoreState) => state.router);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routerState.location.pathname]);

  return (
    <div className={style["content"]}>
      <Switch>
        {routes.map(({ id, path, Component }) => {
          return (
            <Route key={id} exact path={path} render={() => <Component />} />
          );
        })}
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
