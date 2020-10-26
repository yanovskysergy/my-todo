import React from "react";
import FieldAddTodos from "./FieldAddTodos/FieldAddTodos";
import ListTodos from "./ListTodos/ListTodos";
import useTodoState from "../../hooks/useTodoState";
import style from "./content.module.scss";
import createTodos from "../../metods/createTodos";

export default () => {
  const { todos, setTodos, addedTodo, deleteTodo } = useTodoState(
    createTodos(5)
  );

  return (
    <div className={style["content"]}>
      <h1>Todos</h1>
      <FieldAddTodos addedTodo={addedTodo} />
      <ListTodos setTodos={setTodos} deleteTodo={deleteTodo} todos={todos} />
    </div>
  );
};
