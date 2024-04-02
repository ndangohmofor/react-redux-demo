import React from "react";
import { UseSelector, useSelector } from "react-redux";

const HookscakeContainer = () => {
  const numOfCakes = useSelector((state) => {
    return state.numOfCakes;
  });
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button>Buy Cake</button>
    </div>
  );
};

export default HookscakeContainer;
