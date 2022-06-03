import axios, { AxiosResponse } from "axios";
import { tokenState } from "./ridge";

interface Ires extends AxiosResponse {
  method: string;
  headers: {
    authrozation: string;
    refresh: string;
  };
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  if (config.headers === undefined) config.headers = {};
  const token = tokenState.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, status } = error.response;

    if (status === 401) {
      // tokenState.reset();
      const oldAccessToken = localStorage.getItem("token");
      const oldRefreshToken = localStorage.getItem("refresh");
      if (oldAccessToken && oldRefreshToken) {
        const {
          data: { newAccessToken, newRefreshToken },
        } = await axios(`${process.env.REACT_APP_SERVER_URL}/auth/refresh`, {
          method: "get",
          headers: {
            authorization: oldAccessToken,
            refresh: oldRefreshToken,
          },
        });
        config.headers["authorization"] = `Bearer ${newAccessToken}`;
        config.headers["refresh"] = newRefreshToken;
        return axios(config);
      }
    }
    return Promise.reject(error);
  }
);

const rootapi = axios.create({});

rootapi.interceptors.request.use((config) => {
  if (config.headers === undefined) config.headers = {};
  const token = tokenState.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});

rootapi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, status } = error.response;

    if (status === 401) {
      // tokenState.reset();
      const oldAccessToken = localStorage.getItem("token");
      const oldRefreshToken = localStorage.getItem("refresh");
      if (oldAccessToken && oldRefreshToken) {
        const {
          data: { newAccessToken, newRefreshToken },
        } = await axios(`${process.env.REACT_APP_SERVER_URL}/auth/refresh`, {
          method: "get",
          headers: {
            authorization: oldAccessToken,
            refresh: oldRefreshToken,
          },
        });
        config.headers["authorization"] = `Bearer ${newAccessToken}`;
        config.headers["refresh"] = newRefreshToken;
        return axios(config);
      }
    }
    return Promise.reject(error);
  }
);

export { api, rootapi };
