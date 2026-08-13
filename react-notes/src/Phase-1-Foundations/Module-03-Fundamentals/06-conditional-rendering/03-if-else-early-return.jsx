import React, { useState } from "react";

function DisplayMessage({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <p>Please Log in first</p>;
  }

  return <p>Welcome message</p>;
}

const EarlyReturn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn((prev) => !prev)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>

      <DisplayMessage isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default EarlyReturn;
