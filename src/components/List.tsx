import { memo } from "react";

type ListProps = {
  rows: number[];
};

const List = ({ rows }: ListProps) => {
  return (
    <div style={{ height: 200, width: 200, overflowY: "scroll" }}>
      <ul style={{ listStyle: "none" }}>
        {rows.map((row, index) => (
          <li key={index}>{row}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
