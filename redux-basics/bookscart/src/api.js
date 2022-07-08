import axios from "axios";

const url = "http://localhost:3300";

export const fetchBooks = () => {
  return axios.get(`${url}/books`);
};

export const saveBook = (book) => {
  return axios.post(`${url}/books`, book);
};

export const register = (user) => {
  return axios.post(`${url}/users/register`, user);
};

export const login = (user) => {
  return axios.post(`${url}/users/login`, user);
};
