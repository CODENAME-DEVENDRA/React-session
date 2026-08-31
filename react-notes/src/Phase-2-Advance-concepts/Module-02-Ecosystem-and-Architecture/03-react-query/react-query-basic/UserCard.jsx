import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchUser } from "./fetchUsers";

//Step 5
const UserCard = ({ id }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["user", id], //cache is keyed
    queryFn: () => fetchUser(id),
    staleTime: 10000, //treat data as fresh for 10s (skip refetch)
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return <p style={{ color: "#f70505" }}>Error : {error.message}</p>;

  return (
    <div>
      <p>UserCard {id}</p>
      {isFetching && <p>Refreshing...</p>}
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default UserCard;
