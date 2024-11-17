import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../App";

describe("should have hello world", () => {
  test("Pastikan heading H1 bernilai : Iwan Maolaona Sidik", () => {
    render(<App />);
    const webTitle = screen.getByTestId("web__title");
    expect(webTitle).toHaveTextContent(/^Iwan Maolana Sidik$/);
  });

  test("Pastikan nilai plus button adalah 1", () => {
    render(<App />);
    const buttonCounter = screen.getByTestId("button__counter");
    fireEvent.click(buttonCounter);
    expect(buttonCounter.textContent).toBe("1");
  });
});
