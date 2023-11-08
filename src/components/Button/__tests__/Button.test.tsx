import React from "react";
import { render } from "@testing-library/react";

import {Button} from "../Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button type="primary" text="Hello world!" onClick={() => console.log('clicked!')} />);
  });
});