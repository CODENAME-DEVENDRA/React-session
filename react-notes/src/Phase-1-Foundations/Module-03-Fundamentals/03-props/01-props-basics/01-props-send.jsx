import React from "react";
import { UserCardDestructured, UserCardProps } from "./02-props-receive";

function PropsBasics() {
  return (
    <>
      <UserCardProps name="John Doe" isActive={true} />
      <UserCardDestructured name="John Doe" isActive={true} />
    </>
  );
}

export default PropsBasics;
