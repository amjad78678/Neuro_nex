import axios from "axios";

const getAxiosInstance = (portal: string) => {
  const axiosInstance = axios.create({
    baseURL: `/api/${portal}`,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(`${portal}Token`);
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const res = await axiosInstance.get("/refresh");
          if (res.status === 200) {
            const newToken = res.data.accessToken;
            localStorage.setItem(`${portal}Token`, newToken);

            axiosInstance.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${newToken}`;
            originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

            return axiosInstance(originalRequest);
          }
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default getAxiosInstance;
