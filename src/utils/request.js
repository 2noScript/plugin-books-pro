import axios from "axios";
import { randomHeaders } from "./browser-headers.js";

const instanceAxios = axios.create();

instanceAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

export default function request(_options) {
  const parsedUrl = new URL(_options.url);
  const referer = `${parsedUrl.protocol}//${parsedUrl.hostname}`;
  const origin = `${parsedUrl.protocol}//${parsedUrl.host}/`;
  const options = {
    headers: {
      Referer: referer,
      Origin: origin,
      "X-Requested-With": "XMLHttpRequest",
      ...randomHeaders(),
    },
    withCredentials: true,
    validateStatus: (status) => {
      return status === 200;
    },
    method: "GET",
    ..._options,
  };
  return instanceAxios(options);
}
