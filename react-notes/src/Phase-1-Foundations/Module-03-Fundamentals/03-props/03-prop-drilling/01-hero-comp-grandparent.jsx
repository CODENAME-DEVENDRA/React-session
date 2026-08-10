import React from "react";
import { Card } from "./02-card-comp-parent";

//

function Hero() {
  const user = "John";
  return (
    <div>
      <h3>Prop Drilling</h3>
      <Card user={user} />
    </div>
  );
}

export default Hero;
