import React from "react";
import { buyPear } from "../redux";
import { connect } from "react-redux";

const PearContainer = (props) => {
  return (
    <div>
      <h2>Number of Pears - {props.numOfPears}</h2>
      <button onClick={props.buyPear}>Buy Pear</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfPears: state.pear.numOfPears,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPear: () => dispatch(buyPear()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PearContainer);
