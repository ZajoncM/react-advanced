import { createContext, PropsWithChildren, useContext, useState } from "react";

type ToggleContextType = {
  on: boolean;
  toggle: () => void;
};

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

const [useToggle, ToggleContextProvider] = createCtx<ToggleContextType>();

type ToggleProps = PropsWithChildren<{}>;

export const ToggleProvider = ({ children }: ToggleProps) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContextProvider value={{ on, toggle }}>
      <h3>Containment</h3>
      {children}
    </ToggleContextProvider>
  );
};

export const Toggle = () => {
  const { on, toggle } = useToggle();
  return <input type="checkbox" onChange={toggle} checked={on} />;
};
