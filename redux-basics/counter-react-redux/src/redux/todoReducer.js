import ACTION_TYPES from "./actionTypes";

const INITIAL_STATE = {
  list: [{ id: Date.now(), label: "Bring Milk", done: false }],
  currentFilter: "ALL",
  filters: ["ALL", "COMPLETE", "INCOMPLETE"],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  let newState = { ...state };
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      newState.list.push({
        id: Date.now(),
        label: action.payload,
        done: !!Math.floor(Math.random() * 2),
      });
      break;
    case ACTION_TYPES.DELETE_TODO:
      newState.list = state.list.filter((todo) => todo.id !== action.payload);
      break;
    case ACTION_TYPES.SET_FILTER:
      newState.currentFilter = action.payload;
      break;
    default:
  }
  return newState;
};

export default todoReducer;
