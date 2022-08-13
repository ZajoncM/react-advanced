import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it.only("should be implemented", () => {
    render(<Counter />);

    const container = screen.getByText(/example counter/);
    expect(container).toBeInTheDocument();
  });
});
