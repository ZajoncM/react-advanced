import { memo } from "react";

type InputProps = {
  text: string;
  setText: (arg: string) => void;
};

const Input = ({ text, setText }: InputProps) => {
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

export default memo(Input);
