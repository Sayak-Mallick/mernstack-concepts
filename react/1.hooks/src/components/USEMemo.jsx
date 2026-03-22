import { useState, useMemo } from "react";

export const USEMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // This function is "expensive"
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      // Do some operations
    }
    return num * 2;
  };

  // WITHOUT useMemo: Runs every time you type in the input
  // WITH useMemo: Only runs when 'count' changes
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>useMemo (Value: {memoizedValue})</h2>
      <h3>{text}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="Type to test lag..."
      />
    </div>
  );
};
