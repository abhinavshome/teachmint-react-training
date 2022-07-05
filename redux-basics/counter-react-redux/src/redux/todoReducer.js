import ACTION_TYPES from "./actionTypes";

const INITIAL_STATE = [{ id: Date.now(), label: "Bring Milk", done: false }];

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return state.concat({
        id: Date.now(),
        label: action.payload,
        done: false,
      });
    case ACTION_TYPES.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
