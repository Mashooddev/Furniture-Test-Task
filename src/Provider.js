// Provider.js
import React, { useEffect, useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [apiData, setApiData] = useState("");

  async function fetchData() {
    try {
      const url = "https://neolocus.xyz/endpoint_integration";

      const data = {
        style: "modern",
        project_id: "full-house",
        pic_id: "room4",
        hardcoded_pics: ["01", "02", "03", "05", "06", "07"],
        budget: 4000,
      };

      const headers = {
        "Content-type": "application/json",
        Accept: "application/json",
        "x-api-key": "9de70a5e-01e6-4ece-b100-d35a7a4bbab7",
      };

      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });

      // Check if the response status is OK (200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // If the response is OK, parse it as JSON
      const responseData = await response.json();

      setApiData(responseData)

    } catch (error) {
      // Handle errors here
      console.error("Error fetching data:", error);
      return error;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Context.Provider value={{ apiData, setApiData }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
