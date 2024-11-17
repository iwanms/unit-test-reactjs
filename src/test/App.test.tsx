import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import App from "../App";

it("should have hello world", () => {
  render(<App />);
  const message = screen.getByTestId("web__title");
  expect(message).toHaveTextContent(/^Iwan Maolana Sidik$/);
});
