import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/AboutPage";
import AddBookPage from "./components/AddBookPage";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div>
      <h3>BooksCart</h3>
      <BrowserRouter>
        <div className="menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/add-book">Add Book</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/add-book" element={<AddBookPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
