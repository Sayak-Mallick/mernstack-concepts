import React, { useReducer } from "react";

const USEReducer = () => {
  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };
      case "RESET":
        return {
          ...state,
          count: 0,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          color: "#4682B4",
        }}
      >
        {state.count}
      </h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset Count</button>
      </div>
    </div>
  );
};

export default USEReducer;
