import React from "react";
import { TodoItem } from "../types/types";

export default (
  initialState: TodoItem[]
): {
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
  addedTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
} => {
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
