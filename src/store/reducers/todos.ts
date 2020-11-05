import * as constants from "../actions/actionTypes";
import { TodoItem } from "../../types/types";
import { AddTodo, DeleteTodo, ReorderTodo, SetTodos } from "../actions/todos";

const getMaxId = (todos: TodoItem[]) => {
  return todos.length > 0
    ? todos.sort((todo1, todo2) => todo2.id - todo1.id)[0].id
    : 1;
};

const initialState = Array.from({ length: 5 }, (v, k) => k).map(
  (k): TodoItem => {
    return {
      id: k,
      text: `Todo ${k + 1}`,
    };
  }
);

export default (
  state: TodoItem[] = initialState,
  action: AddTodo | DeleteTodo | SetTodos | ReorderTodo
): TodoItem[] => {
  switch (action.type) {
    case constants.ADD_TODO: {
      return [
        ...state,
        {
          id: getMaxId(state) + 1,
          text: action.text,
        },
      ];
    }
    case constants.DELETE_TODO: {
      return [...state.filter((todo) => todo.id !== action.id)];
    }
    case constants.SET_TODOS: {
      return [...action.todos];
    }
    case constants.REORDER_TODO: {
      const newState = [...state];
      const [removed] = newState.splice(action.prevIndex, 1);
      newState.splice(action.nextIndex, 0, removed);

      return newState;
    }
    default:
      return state;
  }
};
