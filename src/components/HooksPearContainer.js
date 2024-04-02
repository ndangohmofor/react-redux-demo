import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyPear } from "../redux";

const HooksPearContainer = () => {
  const numOfPears = useSelector((state) => state.pear.numOfPears);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of pears (hooks) - {numOfPears}</h2>
      <button onClick={dispatch(buyPear())}>Buy Pear</button>
    </div>
  );
};

export default HooksPearContainer;
