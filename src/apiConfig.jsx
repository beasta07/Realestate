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
  // Remove the headers here, as we'll set them dynamically
};

const api = axios.create(apiConfig);

// Add an interceptor to set the Authorization header before each request
api.interceptors.request.use(
  (config) => {
    // Get the token from local storage
    const token = localStorage.getItem("token");
    // If a token exists, set the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default api;

