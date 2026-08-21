import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [url]);

  return { data, loading, error };
}

const UseFetchComp = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  console.log("data", data);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "#f40606" }}>Error {error}</p>}
      {!loading && !error && data && (
        <div>
          {data?.map((user) => (
            <div key={user.id}>
              <h4>{user.name}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UseFetchComp;
