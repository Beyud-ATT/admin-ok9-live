import axios from "axios";

const axoisBase = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axoisBase.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axoisBase.interceptors.response.use(
  (response) => {
    return {
      status: response.status,
      data: response?.data?.data,
      pagination: response?.data?.pagination,
    };
  },
  (error) => {
    if (error.response.status === 401) {
      if (error.response.data.error === -3) {
        localStorage.removeItem("token");
      }

      if (error.response.data.error === -4) {
        //TODO: refresh token
      }
    }
    return Promise.reject(error);
  },
);

export default axoisBase;
