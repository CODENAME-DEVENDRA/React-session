import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

//1.start from 0
//2.increments when the button is clicked
//3.resets to 0

describe("<Counter/>", () => {
  it("start from 0", () => {
    render(<Counter />);
    expect(screen.getByLabelText("count").textContent).toBe("Count: 0");
  });

  it("increments when the button is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole("button", { name: /increment/i }));
    await user.click(screen.getByRole("button", { name: /increment/i }));

    expect(screen.getByLabelText("count").textContent).toBe("Count: 2");
  });

  it("resets to 0", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole("button", { name: /increment/i }));
    await user.click(screen.getByRole("button", { name: /reset/i }));
    expect(screen.getByLabelText("count").textContent).toBe("Count: 0");
  });
});
