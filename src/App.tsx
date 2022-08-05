import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./User";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button id="test" onClick={() => setNumber(number + 1)}>
          {number}
        </button>
        <User id={1} name="user" />
      </header>
    </div>
  );
}

export default App;
