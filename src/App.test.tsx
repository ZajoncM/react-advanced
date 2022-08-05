import { render, screen } from "@testing-library/react";
import App from "./App";

import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("should work as expected", () => {
    render(<App />);

    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(button.innerHTML).toContainEqual("1");
  });
});
