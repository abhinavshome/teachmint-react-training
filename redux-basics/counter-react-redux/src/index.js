import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div style={{ display: "flex" }}>
      <Counter />
      <TodoList />
    </div>
  </Provider>
);
