import { useSelector } from "react-redux";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/AboutPage";
import AddBookPage from "./components/AddBookPage";
import CartPage from "./components/CartPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

const App = () => {
  const cart = useSelector((state) => state.cart);
  const alert = useSelector((state) => state.alert);

  const logout = () => {};

  return (
    <div>
      <h3>BooksCart</h3>
      <div
        style={{
          padding: "5px",
          color: alert.type === "success" ? "green" : "red",
        }}
      >
        {alert.message}
      </div>
      <BrowserRouter>
        <div className="menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart({cart.totalItems})</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/add-book">Add Book</NavLink>
          {localStorage.getItem("token") ? (
            <>
              <span>Welcome {localStorage.getItem("username")}</span>{" "}
              <span className="link" onClick={logout}>
                Log out
              </span>
            </>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/add-book" element={<AddBookPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
