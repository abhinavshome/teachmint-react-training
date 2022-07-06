import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Contacts from "./components/Contacts";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Contacts />
  </Provider>
);