import React from "react";
import CurrentUrl from "./current-url";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = Number(searchParams.get("page") ?? 1);
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={query}
        onChange={(e) => setSearchParams({ query: e.target.value, page: 1 })}
      />

      <p>
        Query <code>{query}</code>{" "}
      </p>
      <p>
        Page <code>{page}</code>{" "}
      </p>

      <button
        onClick={(e) =>
          setSearchParams({ query, page: page > 0 && Number(page - 1) })
        }
      >
        Previous Page
      </button>
      <button
        onClick={(e) => setSearchParams({ query, page: Number(page + 1) })}
      >
        Next Page
      </button>
      <CurrentUrl />
    </div>
  );
};

export default Search;
