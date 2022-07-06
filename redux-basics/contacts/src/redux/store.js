import { createStore } from "redux";
import contactReducer from "./contactReducer";

const store = createStore(
  contactReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
