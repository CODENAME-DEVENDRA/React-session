import React, { useState } from "react";

const StateObject = () => {
  const [userInfo, setUserInfo] = useState({ username: "John", age: 18 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("e.target", e.target);
    console.log("name", name);
    console.log("value", value);

    // setUserInfo((prev) => ({ ...prev, [name]: value }));

    setUserInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <label htmlFor="username">
        Username{" "}
        <input
          type="text"
          onChange={handleChange}
          id="username"
          value={userInfo.username}
          name="username"
        />
      </label>

      <label htmlFor="age">
        Age{" "}
        <input
          type="text"
          onChange={handleChange}
          id="age"
          value={userInfo.age}
          name="age"
        />
      </label>

      <p>
        {userInfo.username} - {userInfo.age}
      </p>
    </div>
  );
};

export default StateObject;
