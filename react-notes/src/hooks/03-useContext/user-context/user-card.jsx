import React from "react";
import { useUser } from "./use-user";

//Step 5
const UserCard = () => {
  const { name, setName } = useUser();
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => setName("Devendra")}>Change to Devendra</button>
      <button onClick={() => setName("John")}>Reset</button>
    </div>
  );
};

export default UserCard;
