import axios from "axios";
import { BASE_URL, TOKEN } from "./config";
export const API = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

API.interceptors.request.use(
  (config) => {
    if (TOKEN) {
      config.headers.Authorization = `token ${TOKEN}`
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
