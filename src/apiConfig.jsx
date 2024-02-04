// import { BASEURL } from "./Url";

// import axios from "axios";

// const apiUrl = "https://api.myraj.au/api/categories/search";

// const apiConfig = {
//   baseURL: apiUrl,
//     Authorization: Bearer ${localStorage.getItem("token")},
//   },
// };

// export const api = axios.create(apiConfig);


// import { BASEURL } from "./Url";
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