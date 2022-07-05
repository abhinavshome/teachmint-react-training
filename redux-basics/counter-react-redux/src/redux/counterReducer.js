import ACTION_TYPES from "./actionTypes";

const INITIAL_STATE = 1;
const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return state + 1;
    case ACTION_TYPES.DECREMENT:
      return state - 1;
    case ACTION_TYPES.INCREMENT_BY:
      return state + action.payload;
    default:
      return state;
  }
};

export default counterReducer;
