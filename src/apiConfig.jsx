import axios from "axios";
const apiUrl = "https://api.myraj.au/api/";

const apiConfig = {
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    // You can add other headers if needed
  },
};

const api = axios.create(apiConfig);
export default api;