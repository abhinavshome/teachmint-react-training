import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import MultiSelect from "./components/MultiSelect";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <MultiSelect />
  </Provider>
);
