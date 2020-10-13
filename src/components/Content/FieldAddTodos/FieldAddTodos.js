import React from "react";
import TextField from "@material-ui/core/TextField";
import style from "./field-add-todos.module.scss";
import IconButton from "@material-ui/core/IconButton";
import { Done } from "@material-ui/icons";
import useInputState from "../../../hooks/useInputState";

export default ({ addedTodo }) => {
  const { value, onChange, reset } = useInputState();

  const onSubmit = (event) => {
    event && event.preventDefault && event.preventDefault();
    addedTodo(value);
    reset();
  };

  return (
    <form className={style["add-todos-container"]} onSubmit={onSubmit}>
      <TextField
        className={style["field"]}
        label="New todo"
        variant="outlined"
        value={value}
        onChange={onChange}
      />
      <IconButton onClick={onSubmit}>
        <Done />
      </IconButton>
    </form>
  );
};
