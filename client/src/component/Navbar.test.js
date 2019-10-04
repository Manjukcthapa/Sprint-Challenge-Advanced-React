import React from "react";
import { render} from "@testing-library/react";
import Navbar from "./Navbar/Navbar.js";

test(" text is found", () => {
    const { getByText} = render(<Navbar />);
   getByText(/Women's World Cup/i)
  });




