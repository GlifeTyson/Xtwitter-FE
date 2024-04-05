import axios from "axios";
import { SetStateAction } from "react";
import { createAxios } from "./createAxios";

export const login = async (
  email: string,
  password: string,
  setError: React.Dispatch<SetStateAction<string>>
) => {
  try {
    const res = await axios
      .post("//localhost:3000/api/users/sign-in", {
        email,
        password,
      })
      .then((res) => {
        if (!res.data.data) {
          return setError(res.data.message);
        }
        localStorage.setItem("accessToken", res.data.data.accessToken);
        window.location.href = "/";
      });
  } catch (error) {
    console.log(error);
  }
};
export const logout = () => {
  localStorage.removeItem("accessToken");
  // console.log(123);
  window.location.href = "/";
};
export const register = async (
  displayName: string,
  password: string,
  email: string,
  confirmPassword: string,
  setError: React.Dispatch<SetStateAction<string>>
) => {
  try {
    const res = axios
      .post("//localhost:3000/api/users", {
        displayName,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log(res.data);
        if (!res.data.data) {
          return setError(res.data.message);
        }
        window.location.href = "/login";
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const fetchMe = async () => {
  try {
    // const Axios = createAxios();
    const res = await axios.get("//localhost:3000/api/users/me");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
