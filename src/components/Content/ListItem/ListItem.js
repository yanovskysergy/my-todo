import React from "react";
import { Paper, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import style from "./list-item.module.scss";

export default ({ todo: { text }, deleteTodo }) => {
  const [elevation, setElevation] = React.useState(0);

  return (
    <Paper
      className={style["list-item"]}
      elevation={elevation}
      onMouseEnter={() => setElevation(3)}
      onMouseLeave={() => setElevation(0)}
    >
      <p>{text}</p>
      <div className={style["button-wrapper"]}>
        <IconButton onClick={deleteTodo}>
          <Delete />
        </IconButton>
      </div>
    </Paper>
  );
};
