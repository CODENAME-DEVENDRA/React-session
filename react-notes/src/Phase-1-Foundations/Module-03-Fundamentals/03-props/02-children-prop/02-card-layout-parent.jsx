import React from "react";
import Card from "./01-card-component-child";

function CardLayout() {
  return (
    <>
      <Card>
        <h3>Title</h3>
        <p>Description</p>
      </Card>

      <Card>
        <img src="https://picsum.photos/id/237/200/300" alt="dog" />
      </Card>
    </>
  );
}

export default CardLayout;
