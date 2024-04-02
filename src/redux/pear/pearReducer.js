import { BUY_PEAR } from "./pearTypes";

const initialState = {
  numOfPears: 50,
};

const pearReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PEAR:
      return {
        ...state,
        numOfPears: state.numOfPears - 1,
      };

    default:
      return state;
  }
};

export default pearReducer;
