import React from "react";
import "./Book.css";

const Book = ({ book }) => {
  return (
    <div>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
      <div>{book.rating}</div>
      <div>{book.price}</div>
      <hr />
    </div>
  );
};

export default Book;
