import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import style from "./overview.module.scss";

const dependencies = [
  '"react": "^16.14.0",',
  '"react-dom": "^16.14.0",',
  '"redux": "^4.0.5",',
  '"react-redux": "^7.2.2",',
  '"react-router": "^5.2.0",',
  '"react-router-dom": "^5.2.0",',
  '"typescript": "^4.0.3",',
  '"@material-ui/core": "^4.11.0",',
  '"@material-ui/icons": "^4.9.1",',
  '"@material-ui/styles": "^4.10.0",',
  '"react-beautiful-dnd": "^13.0.0",',
];

export default () => {
  const dispatch = useDispatch();

  return (
    <div className={style["overview"]}>
      <h1>Overview</h1>
      <h3>Hello! I'm Front-end developer</h3>
      <h4>
        It's my portfolio project. Here you can find some information about this
        project:
      </h4>
      Basic dependencies:
      <br />
      <div className={style["dependencies"]}>
        <span className={style["punctuation"]}>{"{"}</span>
        {dependencies.map((el) => (
          <span className={style["item"]}>{el}</span>
        ))}
        <span className={style["punctuation"]}>{"{"}</span>
      </div>
      <div className={style["apps"]}>
        At the moment this project has only one application -{" "}
        <span className={style["link"]} onClick={() => dispatch(push("todo"))}>
          Todo
        </span>
      </div>
    </div>
  );
};
