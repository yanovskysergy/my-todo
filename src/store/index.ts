import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";

export const history = createBrowserHistory();

function configureStore() {
  const rootReducer = createRootReducer(history);
  const initialState = {};
  const composeMiddleware = compose(applyMiddleware(routerMiddleware(history)));

  return createStore(rootReducer, initialState, composeMiddleware);
}

export default configureStore();
