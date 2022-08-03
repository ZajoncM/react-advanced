import "./App.css";
import CustomErrorBoundary from "./components/ErrorBoundary";
import Counter from "./components/Counter";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback() {
  return (
    <div role="alert">
      <h1>Something went wrong:</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CustomErrorBoundary>
        <Counter />
      </CustomErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Counter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
