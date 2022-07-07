import axios from "axios";

const url = "http://localhost:5000/books";

export const fetchBooks = () => {
  return axios.get(url);
};

export const saveBook = (book) => {
  return axios.post(url, book);
};
