import axios from "axios";

const api = axios.create({
  baseURL:
    "https://www.lostarkmarket.online/api/export-market-live/:region?ids=101301,101011",
});

export default api;
