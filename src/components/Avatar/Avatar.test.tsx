import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { Example as Avatar } from "./Avatar.stories";

it("renders random unsplash image by default", () => {
  render(<Avatar {...Avatar.args} />);
  expect(screen.getByAltText("user avatar")).toHaveAttribute("src", `https://source.unsplash.com/random/192x192`);
});
