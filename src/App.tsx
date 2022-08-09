import "./App.css";
import openSocket from "socket.io-client";
import { useEffect, useState } from "react";
const socket = openSocket("http://localhost:8000");

function subscribeToTimer(cb: (value: string) => void) {
  socket.on("timer", (timestamp) => cb(timestamp));
  socket.emit("subscribeToTimer", 100);
}

function App() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    subscribeToTimer((timestamp: string) => {
      setTime(timestamp);
    });
  }, []);

  return <div className="App">{time}</div>;
}

export default App;
