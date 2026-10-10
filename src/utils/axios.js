import axios from "axios";

const axiosProtected = axios.create({ baseURL: import.meta.env.VITE_API_URL });

axiosProtected.interceptors.response.use(
  (response) => {
    console.log(response);
  },
  (error) => {
    if (error.response.status === 401) {
      console.log(error);
    }
    return Promise.reject(error);
  },
);

export default axiosProtected;
