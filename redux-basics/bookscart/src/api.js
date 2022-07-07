import axios from "axios";

const url = "http://localhost:3300/books";

export const fetchBooks = () => {
  return axios.get(url);
};

export const saveBook = (book) => {
  return axios.post(url, book);
};
