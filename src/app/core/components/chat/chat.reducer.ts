import { Action } from "@ngrx/store";
import { ActionTypes } from './chat.actions';

const initalState = () => ({
  open: false,
  adminOnline: false
});

export const chatReducer = (state = initalState(), action: Action) => {
  const {type} = action;

  switch (type) {
    case ActionTypes.OPEN : {
      return Object.assign({}, state, {open: true})
    }
    case ActionTypes.CLOSE: {
      return Object.assign({}, state, {open: false})
    }
    case ActionTypes.ADMIN: {
      return Object.assign({}, state, {adminOnline: action.payload})
    }
    default : {
      return state
    }
  }
};
