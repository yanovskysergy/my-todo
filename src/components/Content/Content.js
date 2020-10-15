import React from "react";
import FieldAddTodos from "./FieldAddTodos/FieldAddTodos";
import ListTodos from "./ListTodos/ListTodos";
import useTodoState from "../../hooks/useTodoState";

const initial = Array.from({ length: 5 }, (v, k) => k).map((k) => {
  return {
    id: `${k}`,
    text: `Todo ${k + 1}`,
  };
});

export default () => {
  const { todos, setTodos, addedTodo, deleteTodo } = useTodoState(initial);

  return (
    <>
      <h1>Todos</h1>
      <FieldAddTodos addedTodo={addedTodo} />
      <ListTodos setTodos={setTodos} deleteTodo={deleteTodo} todos={todos} />
    </>
  );
};
