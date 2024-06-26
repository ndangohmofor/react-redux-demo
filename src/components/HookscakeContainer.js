import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HookscakeContainer = () => {
  const numOfCakes = useSelector((state) => {
    return state.cake.numOfCakes;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes (hooks) - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HookscakeContainer;
