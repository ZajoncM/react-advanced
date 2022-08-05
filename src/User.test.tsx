import { render, screen } from "@testing-library/react";
import { debug } from "jest-preview";
import { userFactory } from "./factories/user";
import User from "./User";
import MockDate from "mockdate";

MockDate.set("2000-11-22");

describe("User", () => {
  it("should show user details", () => {
    const user = userFactory.build();
    render(<User id={user.id} name={user.name} />);

    const container = screen.getByText(user.name);
    const year = screen.getByText("22/11/2000");
    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();

    expect(container).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });
});
