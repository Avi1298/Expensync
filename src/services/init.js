import axios from "axios";
import { BASE_API_URL } from "../utils/constant";
import { store } from "../store/store";

export const instance = axios.create({
  baseURL: BASE_API_URL,
});

export const config = ({ multipart = false, auth = true } = {}) => {
  const { token } = store.getState()?.auth || {};

  const headers = {
    Accept: "application/json",
  };

  if (multipart) {
    headers["Content-Type"] = "multipart/form-data";
  } else {
    headers["Content-Type"] = "application/json";
  }

  if (auth && token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { headers };
};
