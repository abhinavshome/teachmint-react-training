import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Counter />
    <Fruits />
  </>
);
