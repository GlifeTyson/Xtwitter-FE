import axios, { AxiosInstance } from "axios";

export const createAxios = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: "http://localhost:3000", // Replace with your API base URL
    headers: {
      "Content-Type": "application/json",
      "x-token": localStorage.getItem("accessToken") || "", // Get access token from localStorage
    },
  });

  return instance;
};
