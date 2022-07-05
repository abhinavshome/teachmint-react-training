import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";

const store = createStore(
  combineReducers({
    todos: todoReducer,
    counter: counterReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
