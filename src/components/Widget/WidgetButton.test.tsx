import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { WidgetButton } from "./WidgetButton";

describe("Widget", () => {
  it("should render Widget component", () => {
    render(<WidgetButton />);

    expect(screen.getByTestId("widget-button")).toBeInTheDocument();
  });

  it("should show the modal when clicking the button", async () => {
    render(<WidgetButton />);

    const button = screen.getByTestId("button");

    await userEvent.click(button);

    expect(screen.getByTestId("widget-form")).toBeInTheDocument();
  });
});
