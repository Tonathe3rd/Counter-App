// import React from "react";

export const initialState = { count: 0};

export function ValueReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count++};
    case "decrement":
      return { count: state.count-- };
    case "reset":
        //unable to set inputvalue(countValue) to 0
      return { count: 0, countValue: 0};
    case "setValue":
      return {count: action.payload}
    default:
      throw new Error("Invalid action type");
  }
}