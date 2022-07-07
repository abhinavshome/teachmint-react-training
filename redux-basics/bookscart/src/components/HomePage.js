import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../api";
import Book from "./Book";

const HomePage = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchBooks().then(
      (res) => dispatch({ type: "LOAD_BOOKS", payload: res.data }),
      (err) => console.log(err)
    );
  }, []);

  return (
    <div>
      <h4>Books</h4>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default HomePage;
