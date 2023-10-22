import { useReducer } from "react";
import { ValueReducer, initialState } from "../Reducers/valueReducer";

const useCounter = () => {
  const [state, dispatch] = useReducer(ValueReducer, initialState);

  const onIncrement = () => {
    dispatch({ type: "increment" });
  };

  const onDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const resetCount = () => {
    dispatch({ type: "reset" });
  };

  const setValue = (val) => {
    dispatch({ type: "setValue", payload: val });
  };

  return {
    onIncrement,
    onDecrement,
    resetCount,
    setValue,
    state,
  };
};

export default useCounter;