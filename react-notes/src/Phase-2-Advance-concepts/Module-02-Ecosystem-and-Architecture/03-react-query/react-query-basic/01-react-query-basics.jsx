import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "./queryClient";
import UserPage from "./UserPage";

//npm i @tanstack/react-query

//Step 2
const ReactQueryBasics = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserPage />
    </QueryClientProvider>
  );
};

export default ReactQueryBasics;
