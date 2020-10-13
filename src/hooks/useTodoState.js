import React from "react";

export default (initialState) => {
  const [todos, setTodos] = React.useState(initialState);

  return {
    todos,
    addedTodo: (text) => {
      text && setTodos([...todos, { text }]);
    },
    deleteTodo: (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    },
  };
};
