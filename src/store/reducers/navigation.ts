import { CloseNavigation, OpenNavigation } from "../actions/navigation";
import { CLOSE_NAVIGATION, OPEN_NAVIGATION } from "../actions/actionTypes";

const initialState = {
  open: false,
};

export interface NavigationState {
  open: boolean;
}

export default (
  state: NavigationState = initialState,
  { type }: OpenNavigation | CloseNavigation
) => {
  switch (type) {
    case OPEN_NAVIGATION: {
      return { open: true };
    }
    case CLOSE_NAVIGATION: {
      return { open: false };
    }
    default: {
      return state;
    }
  }
};
