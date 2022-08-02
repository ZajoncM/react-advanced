import "./App.css";
import { createContext, useContext } from "react";

function createCtx<A extends {} | null>() {
  const ctx = createContext<A | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export const [useCtx, CtxProvider] = createCtx<string>();

function App() {
  return (
    <CtxProvider value="test">
      <div className="App">
        <ChildComponent />
      </div>
    </CtxProvider>
  );
}

const ChildComponent = () => {
  const text = useCtx();

  return <p>{text}</p>;
};

export default App;
