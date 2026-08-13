import React, { useState } from "react";

const MultipleConditions = () => {
  const [status, setStatus] = useState("loading");

  const renderContent = () => {
    switch (status) {
      case "loading":
        return <p>Loading....</p>;
      case "error":
        return <p>Something went wrong</p>;
      case "success":
        return <p>Data loaded</p>;

      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={() => setStatus("loading")}>loading</button>
      <button onClick={() => setStatus("error")}>error</button>
      <button onClick={() => setStatus("success")}>success</button>

      <div>{renderContent()}</div>
    </div>
  );
};

export default MultipleConditions;
