import { combineReducers } from "redux";
import icecreamReducer from "./icecream/icecreamReducer";
import cakeReducer from "./cake/cakeReducer";
import pearReducer from "./pear/pearReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  pear: pearReducer,
});

export default rootReducer;
