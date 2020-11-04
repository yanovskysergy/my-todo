import { combineReducers } from "redux";
import todos from "./todos";
import { TodoItem } from "../../types/types";

export interface StoreState {
  todos: TodoItem[];
}

export default combineReducers<StoreState>({ todos });
