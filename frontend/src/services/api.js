import axios from "axios";

const API = axios.create({
  baseURL: "https://codealpha-ecommercestore-3eqt.onrender.com/api",
});

export default API;