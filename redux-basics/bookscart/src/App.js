import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { logout } from "./api";
import "./App.css";
import AboutPage from "./components/AboutPage";
import AddBookPage from "./components/AddBookPage";
import CartPage from "./components/CartPage";
import DashboardPage from "./components/DashboardPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

const App = () => {
  const cart = useSelector((state) => state.cart);
  const alert = useSelector((state) => state.alert);
  const isLoggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch({ type: "LOGIN" });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.log("could not log out");
    }
  };

  return (
    <div>
      <h3>BooksCart</h3>
      {alert.message && (
        <div
          style={{
            padding: "5px",
            color: alert.type === "success" ? "green" : "red",
          }}
        >
          {alert.message}
          <span onClick={() => dispatch({ type: "CLEAR_ALERT" })}>X</span>
        </div>
      )}
      <BrowserRouter>
        <div className="menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart({cart.totalItems})</NavLink>
          <NavLink to="/about">About</NavLink>
          {isLoggedIn ? (
            <>
              {localStorage.getItem("username") === "admin" && (
                <NavLink to="/add-book">Add Book</NavLink>
              )}
              <NavLink to="/dashboard">Dashboard</NavLink>
              <span>Welcome {localStorage.getItem("username")}</span>{" "}
              <span className="link" onClick={handleLogout}>
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
          <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
