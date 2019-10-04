import React from "react";
import { render } from "@testing-library/react";
import PlayerCard from "./PlayerCard";

test(" component render", () => {
  const props = [{name: "Name", country: "Country", id: "id"}]  
  render(<PlayerCard member={props}/>);
});
