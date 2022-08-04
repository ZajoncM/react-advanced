import { useState } from "react";

function RenderProps() {
  return (
    <Tabs defaultActive={0}>
      {({ active, setActive }) => {
        return (
          <div>
            <ul>
              <li onClick={() => setActive(0)}>Zakładka 1</li>
              <li onClick={() => setActive(1)}>Zakładka 2</li>
            </ul>
            <div>
              {active === 0 && (
                <div>
                  <p>Treść zakładki 1</p>
                </div>
              )}
              {active === 1 && (
                <div>
                  <p>Treść zakładki 2</p>
                </div>
              )}
            </div>
          </div>
        );
      }}
    </Tabs>
  );
}

type TabProps = {
  children: (prop: {
    active: number;
    setActive: (to: number) => void;
  }) => JSX.Element;
  defaultActive: number;
};

const Tabs = ({ children }: TabProps) => {
  const [active, setActive] = useState(0);

  return children({ active, setActive });
};

export default RenderProps;
