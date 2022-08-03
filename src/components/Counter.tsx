import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(state + 1);
  };

  if (state === 5) throw new Error("Error!!!");

  return <button onClick={handleClick}>{state}</button>;
};

export default Counter;
