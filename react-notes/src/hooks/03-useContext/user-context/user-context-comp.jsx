import React from "react";
import UserProvider from "./user-provider";
import UserCard from "./user-card";

//Step 3
const UserContextComp = () => {
  return (
    <UserProvider>
      <UserCard />
    </UserProvider>
  );
};

export default UserContextComp;
