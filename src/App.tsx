import { Toggle, ToggleProvider } from "./components/CompoundComponent";
import RenderProps from "./components/RenderProps";
import { Author, Video } from "./components/SpecializedComponent";

function App() {
  return (
    <div className="App">
      <h3>RenderProps</h3>
      <RenderProps />
      <ToggleProvider>
        <Toggle />
      </ToggleProvider>
      <h3>Generic</h3>
      <Video />
      <Author />
    </div>
  );
}

export default App;
