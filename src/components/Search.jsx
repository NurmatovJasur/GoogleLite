import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";

export const Search = () => {
  const [text, setText] = useState("");
  const [debouncedValue] = useDebounce(text, 600);

  const { setSearchTerm, getResults } = useResultContext();

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
      getResults(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:mt-3">
      <input
        type="text"
        value={text}
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg mb-3"
        placeholder="Введите поисковый запрос или URL"
        onChange={(e) => setText(e.target.value)}
      />

      {text && (
        <button
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setText("")}
        >
          X
        </button>
      )}
    </div>
  );
};
