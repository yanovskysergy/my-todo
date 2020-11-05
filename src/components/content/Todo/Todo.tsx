import React from "react";
import FieldAddTodos from "../../modules/FieldAddTodos/FieldAddTodos";
import ListTodos from "../../modules/ListTodos/ListTodos";

export default () => {
  return (
    <>
      <h1>Todo</h1>
      <FieldAddTodos />
      <ListTodos />
    </>
  );
};
