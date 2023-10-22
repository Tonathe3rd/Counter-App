import React, { useState } from "react";
import "./index";
import Button from "./components/Button";
import CounterValue from "./components/CounterValue";
import useCounter from "./Hooks/useCounter";

function App() {
  const { onIncrement, onDecrement, resetCount, setValue, state } =
    useCounter();
  const [countValue, setCountValue] = useState(0);

  return (
    <div className="App">
      <div className="Counter">
        <div className="counterValue">
        <CounterValue count={state.count} />
        </div>
        
        <Button onClick={onIncrement} text="Increment" /> <br/>
        <Button onClick={onDecrement} text="Decrement" /><br/>
        <Button onClick={resetCount} text="Reset" /><br/>
        
        <div>
          <input
            type="number"
            className="inputValue"
            value={countValue}
            onChange={(e) => setCountValue(e.target.value)}
          /> <Button onClick={() => setValue(countValue)} text="Set Value" />
        </div>
      </div>      
    </div>
  );
}

export default App;
