import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveBook } from "../api";
import styles from "./AddBookPage.module.css";

const AddBookPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author || !rating || !price) {
      setError("All fields are mandatory!");
      return false;
    }
    setError("");
    console.log("form submitted", title, author, rating, price);
    const book = {
      title,
      author,
      rating: +rating,
      price: +price,
    };

    const res = await saveBook(book);

    setTitle("");
    setAuthor("");
    setRating("");
    setPrice("");
    console.log(res);
    navigate("/");
  };

  return (
    <div className={styles.bookForm}>
      <div style={{ color: "red" }}>{error} &nbsp;</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Rating</label>
          <select
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddBookPage;
