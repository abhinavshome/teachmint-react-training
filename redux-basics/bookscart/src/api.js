import axios from "axios";

const url = "http://localhost:3300";

const makeGETCall = (url) => {
  let config = {
    headers: {
      authtoken: localStorage.getItem("token"),
    },
  };
  return axios.get(url, config);
};

const makePOSTCall = (url, data) => {
  let config = {
    headers: {
      authtoken: localStorage.getItem("token"),
    },
  };
  return axios.post(url, data, config);
};

export const fetchBooks = () => {
  return makeGETCall(`${url}/books`);
};

export const saveBook = (book) => {
  return makePOSTCall(`${url}/books`, book);
};

export const register = (user) => {
  return makePOSTCall(`${url}/users/register`, user);
};

export const login = (user) => {
  return makePOSTCall(`${url}/users/login`, user);
};

export const logout = () => {
  return makeGETCall(`${url}/users/logout`);
};
