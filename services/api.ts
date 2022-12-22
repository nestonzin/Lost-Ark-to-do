import axios from "axios";

const api = axios.create({
  baseURL: "https://www.lostarkmarket.online/api",
});

export default api;
