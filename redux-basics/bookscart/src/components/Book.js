import React from "react";
import { useDispatch } from "react-redux";
import "./Book.css";
import Rating from "./Rating";

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
      <div>
        <Rating rating={book.rating} />
      </div>
      <div>{book.price}</div>
      <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: book })}>
        Add to cart
      </button>
      <hr />
    </div>
  );
};

export default Book;
