import React from "react";
// import Globe from "./globe";
import "./App.css";

const loadGlobe = () => import("./globe");
const Globe = React.lazy(loadGlobe);

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowGlobe(true)}>show</button>
      {/* {showGlobe ? <Globe /> : null} */}

      <React.Suspense fallback={<div>loading globe...</div>}>
        {showGlobe ? <Globe /> : null}
      </React.Suspense>
    </div>
  );
}

export default App;
