import axios from "axios";
import { BASE_API_URL } from "../utils/constant";
import { store } from "../store/store";

export const instance = axios.create({ baseURL: BASE_API_URL });

export const config = ({ multipart = true, auth = true } = {}) => {
  const { token } = store.getState()?.user || {};

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (multipart) {
    headers["Content-Type"] = "multipart/form-data";
  }
  if (auth) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { headers };
};
