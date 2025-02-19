import HomeSection from "@/components/HomeSection";
import Parent from "@/components/ParentComponent";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState<any>({});

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
      setState(data.me);
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

  return state ? (
    <>
      <Parent />
    </>
  ) : (
    <>
      <HomeSection />
    </>
  );
}
