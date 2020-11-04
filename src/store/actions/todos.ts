import * as actionTypes from "./actionTypes";
import { TodoItem } from "../../types/types";

export interface AddTodo {
  type: typeof actionTypes.ADD_TODO;
  text: string;
}
export const addTodo = (text: string): AddTodo => {
  return {
    type: actionTypes.ADD_TODO,
    text,
  };
};

export interface DeleteTodo {
  type: typeof actionTypes.DELETE_TODO;
  id: number;
}
export const deleteTodo = (id: number): DeleteTodo => {
  return {
    type: actionTypes.DELETE_TODO,
    id,
  };
};

export interface SetTodos {
  type: typeof actionTypes.SET_TODOS;
  todos: TodoItem[];
}
export const setTodos = (todos: TodoItem[]): SetTodos => {
  return {
    type: actionTypes.SET_TODOS,
    todos,
  };
};

export interface ReorderTodo {
  type: typeof actionTypes.REORDER_TODO;
  prevIndex: number;
  nextIndex: number;
}
export const reorderTodo = (
  prevIndex: number,
  nextIndex: number
): ReorderTodo => {
  return {
    type: actionTypes.REORDER_TODO,
    prevIndex,
    nextIndex,
  };
};
