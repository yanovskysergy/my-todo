import React from "react";
import FieldAddTodos from "../../components/FieldAddTodos/FieldAddTodos";
import ListTodos from "../../components/ListTodos/ListTodos";
import style from "./content.module.scss";

export default () => {
  return (
    <div className={style["content"]}>
      <h1>Todos</h1>
      <FieldAddTodos />
      <ListTodos />
    </div>
  );
};
