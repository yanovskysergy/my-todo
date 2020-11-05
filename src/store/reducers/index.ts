import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import todos from "./todos";
import navigation, { NavigationState } from "./navigation";
import { TodoItem } from "../../types/types";

export interface StoreState {
  todos: TodoItem[];
  navigation: NavigationState;
  router: RouterState;
}

export default (history: any) => {
  return combineReducers({
    todos,
    navigation,
    router: connectRouter(history),
  });
};
