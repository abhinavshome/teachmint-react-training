import { createStore } from "redux";
import multiSelectReducer from "./multiSelectReducer";

const store = createStore(
  multiSelectReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
