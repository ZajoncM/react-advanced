import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Input from "./components/Input";
import List from "./components/List";
import VirtualizedList from "./components/VirtualizedList";

function App() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const rows = new Array(80000)
    .fill(true)
    .map(() => 25 + Math.round(Math.random() * 100));

  return (
    <div className="App">
      <Counter number={number} setNumber={setNumber} />
      <Input text={text} setText={setText} />
      <h3>Lists</h3>
      <div style={{ display: "flex" }}>
        <VirtualizedList rows={rows} />
        {/* <List rows={rows} /> */}
      </div>
    </div>
  );
}

export default App;
