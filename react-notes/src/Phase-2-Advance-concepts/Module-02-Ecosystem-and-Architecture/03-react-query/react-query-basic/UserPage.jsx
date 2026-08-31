import React, { useState } from "react";
import UserCard from "./UserCard";

//Step 4
const UserPage = () => {
  const [id, setId] = useState(1);
  const idArray = [1, 2, 3];
  return (
    <div>
      <h2>React Query | caching</h2>

      <div>
        {idArray.map((n) => (
          <button key={n} onClick={() => setId(n)}>
            User {n}
          </button>
        ))}
      </div>

      <UserCard id={id} />
    </div>
  );
};

export default UserPage;
