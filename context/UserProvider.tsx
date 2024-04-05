import { fetchMe } from "@/services/user";
import axios from "axios";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type userContextType = {
  me: any;
};
const userContextDefaultValues: userContextType = {
  me: {},
};
export const UserContext = createContext<userContextType>(
  userContextDefaultValues
);

export function useAuth() {
  return useContext(UserContext);
}
type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [me, setMe] = useState<any>({});

  let accessToken: string;

  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("accessToken") || "";
  }

  async function fetchData(url: any) {
    try {
      const response = await axios.get(url, {
        headers: { "x-token": accessToken },
      });
      return response.data; // Return the data fetched from the URL
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Throw the error to be handled by the caller
    }
  }
  async function fetchAndDisplayData() {
    const url = "//localhost:3000/api/users/me";
    try {
      const data = await fetchData(url);
      console.log("Fetched data:", data);
      setMe(data.me);
      // Do something with the fetched data
    } catch (error) {
      // Handle errors
      console.error("Failed to fetch data:", error);
    }
  }
  // Call the function to fetch and display data
  useEffect(() => {
    fetchAndDisplayData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    me,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
