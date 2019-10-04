import React from "react";
import { render } from "@testing-library/react";
import PlayerList from "./PlayerList";

describe("<PlayerList />", () => {
  const players = [{ name: "manju", country: "Nepal", id: "1", searches: "1" }];
  it("renders without crashing", () => {
    render(<PlayerList players={players} />);
  });
});
