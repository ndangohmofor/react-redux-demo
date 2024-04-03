import { combineReducers } from "redux";
import icecreamReducer from "./icecream/icecreamReducer";
import cakeReducer from "./cake/cakeReducer";
import pearReducer from "./pear/pearReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  pear: pearReducer,
  user: userReducer,
});

export default rootReducer;
