import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>example counter</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>click</button>
    </div>
  );
};

export default Counter;
