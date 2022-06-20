import axios from "axios";
import { token } from "./localstorage.token";

export const baseUrl: string =
  process.env.REACT_APP_SERVER_URL || "http://localhost:3333/";

export const instance = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const configurator = async (config: any) => {
  config.headers.Authorization = `Bearer ${token.get()}`;
  return config;
};

instance.interceptors.request.use(configurator, console.info);

export type AxiosReturnType = { data: null | any; error: null | any };
