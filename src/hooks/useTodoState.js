import React from "react";

export default (initialState) => {
  const [todos, setTodos] = React.useState(initialState);
  const nexId = React.useRef(todos.length);

  return {
    todos,
    setTodos,
    addedTodo: (text) => {
      if (text) {
        const newTodo = {
          text,
          id: `${nexId.current}`,
        };

        setTodos([...todos, newTodo]);
        nexId.current = nexId.current + 1;
      }
    },
    deleteTodo: (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
  };
};
