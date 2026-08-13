import React from "react";

// Rules
// key must be unique (database id is perfect)
// Avoid array index as key if the list can reorder / insert / remove -> indexes shift -> React confuse

const Keys = () => {
  const users = [
    { id: 1, username: "John" },
    { id: 2, username: "Alice" },
    { id: 3, username: "Tony" },
  ];
  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Keys;
