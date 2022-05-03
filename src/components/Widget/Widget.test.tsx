import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Widget } from "./Widget";

describe("Widget", () => {
  it("should render Widget component", () => {
    render(<Widget />);

    expect(screen.getByTestId("widget")).toBeInTheDocument();
  });

  it("should show the modal when clicking the button", async () => {
    render(<Widget />);

    const button = screen.getByTestId("button");

    await userEvent.click(button);

    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });
});
