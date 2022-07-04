import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const el = React.createElement("h1", { class: "test" }, "Hello world");
const welcomeMessage = "Hello World";
const el = <h1 className="test">{welcomeMessage}</h1>;
const fruits = ["Mango", "Guava", "Banana", "Apple"];

const sayHello = () => {
  return "Hello";
};

const printName = (name) => console.log(name);
const sayHi = (e) => console.log(e);

const Welcome = () => {
  return <h2>Welcome to Teachmint</h2>;
};

const Address = (props) => {
  return (
    <>
      <i>{props.city}</i>
      <div>{props.children}</div>
    </>
  );
};

root.render(
  <div>
    {el}
    {sayHello()}
    <button onClick={sayHi}>say hi</button>
    <ul>
      {fruits.map((f, i) => (
        <li key={i} onClick={() => printName(f)}>
          {f}
        </li>
      ))}
    </ul>
    <Welcome />
    <Address city="Mumbai">This is one of the best cities</Address>
  </div>
);
