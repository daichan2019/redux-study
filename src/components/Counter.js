import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../actions";

// stateを受け取る
const mapStateToProps = (state) => {
  return { count: state.count };
};

// actionをdispatchに渡す
const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div className="container">
      <div className="box">
        <span>{count}</span>
        <div className="control">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
