//npm i @reduxjs/toolkit
//npm install react-redux

//Step 3
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import CountControls from "./count-controls";
import CountDisplay from "./count-display";

const ReduxToolkitComp = () => {
  return (
    <Provider store={store}>
      <CountControls />
      <CountDisplay />
    </Provider>
  );
};

export default ReduxToolkitComp;
