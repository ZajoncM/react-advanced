import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  it("should be implemented", () => {
    render(<Counter />);

    const container = screen.getByText(/example counter/);
    expect(container).toBeInTheDocument();
  });

  it("should increase counter after button clicking", () => {
    render(<Counter />);

    const display = screen.getByText(/0/);
    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(display.innerHTML).toContainEqual("1");
  });
});
