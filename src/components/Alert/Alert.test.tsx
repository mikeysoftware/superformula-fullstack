import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { Info, Success, Error } from "./Alert.stories";

it("renders alert with 'info' styles", () => {
  render(<Info {...Info.args}>{Info.args?.children}</Info>);
  expect(screen.getByRole("alert")).toHaveStyle("background-color: #d4d4d4");
});

it("renders alert with 'success' styles", () => {
  render(<Success {...Success.args}>{Success.args?.children}</Success>);
  expect(screen.getByRole("alert")).toHaveStyle("background-color: #10b981");
});

it("renders alert with 'error' styles", () => {
  render(<Error {...Error.args}>{Error.args?.children}</Error>);
  expect(screen.getByRole("alert")).toHaveStyle("background-color: #dc2626");
});
