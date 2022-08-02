import { memo } from "react";

type CounterProps = {
  number: number;
  setNumber: (arg: number) => void;
};

const Counter = ({ number, setNumber }: CounterProps) => {
  return <button onClick={() => setNumber(number + 1)}>{number}</button>;
};

export default memo(Counter);
