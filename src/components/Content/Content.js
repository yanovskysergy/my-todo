import React from "react";
import FieldAddTodos from "./FieldAddTodos/FieldAddTodos";
import ListTodos from "./ListTodos/ListTodos";
import useTodoState from "../../hooks/useTodoState";

export default () => {
  const { todos, addedTodo, deleteTodo } = useTodoState([{ text: "qwe" }]);

  return (
    <>
      <h1>Todos</h1>
      <FieldAddTodos addedTodo={addedTodo} />
      <ListTodos deleteTodo={deleteTodo} todos={todos} />
    </>
  );
};
