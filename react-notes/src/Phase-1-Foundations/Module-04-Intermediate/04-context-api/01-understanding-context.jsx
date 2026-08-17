import React, { createContext, useContext } from "react";

//Step 1 : create the context
const UserContext = createContext();

function Receiver() {
  //Step 3 : Access data using useContext hook
  const message = useContext(UserContext);
  return <div>Data received : {message}</div>;
}

const BasicContext = () => {
  const name = "Devendra";
  return (
    <>
      {/* Step 2 : Wrap the component with Providers */}
      <UserContext value={name}>
        <Receiver />
      </UserContext>
    </>
  );
};

export default BasicContext;
