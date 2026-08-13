import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "#f10b0b" }}>Error: {error}</p>;

  return (
    <div>
      <p>Name : {user?.name}</p>
      <p>Email : {user?.email}</p>
      <p>Username : {user?.username}</p>
    </div>
  );
};

export default DataFetching;
