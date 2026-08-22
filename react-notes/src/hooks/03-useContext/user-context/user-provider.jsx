import React, { useState } from "react";
import { UserContext } from "./user-context";

//Step 2
const UserProvider = ({ children }) => {
  const [name, setName] = useState("John");

  return <UserContext value={{ name, setName }}>{children}</UserContext>;
};

export default UserProvider;
