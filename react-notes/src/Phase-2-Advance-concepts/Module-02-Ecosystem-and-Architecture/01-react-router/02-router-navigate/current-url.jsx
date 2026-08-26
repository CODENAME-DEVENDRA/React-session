import React from "react";
import { useLocation } from "react-router-dom";

const CurrentUrl = () => {
  const location = useLocation();
  return (
    <p>
      Current URL{" "}
      <code>
        {location.pathname}
        {location.search}
      </code>
    </p>
  );
};

export default CurrentUrl;
