import * as actionTypes from "./actionTypes";

export interface OpenNavigation {
  type: typeof actionTypes.OPEN_NAVIGATION;
}
export const openNavigation = () => {
  return {
    type: actionTypes.OPEN_NAVIGATION,
  };
};

export interface CloseNavigation {
  type: typeof actionTypes.CLOSE_NAVIGATION;
}
export const closeNavigation = () => {
  return {
    type: actionTypes.CLOSE_NAVIGATION,
  };
};
