import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google.serper.dev/search";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (query) => {
    setIsLoading(true);

    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "X-API-KEY": import.meta.env.VITE_APP_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: query,
        }),
      });

      const data = await response.json();
      

      setResults(data);
    } catch (error) {
      console.error("Error:", error);
    }

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
