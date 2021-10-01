import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { Primary, Secondary } from "./Button.stories";

it("renders primary button", () => {
  render(<Primary {...Primary.args}>{Primary.args?.children}</Primary>);
  expect(screen.getByRole("button")).toHaveStyle("background: white");
});

it("renders secondary button", () => {
  render(<Secondary {...Secondary.args}>{Secondary.args?.children}</Secondary>);
  expect(screen.getByRole("button")).toHaveStyle("background: transparent");
});
