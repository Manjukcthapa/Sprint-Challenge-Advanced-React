import React from "react";

export default function PlayerCard(props) {
  return (
    <div>
      <p>{props.member.name}</p>
      <p>{props.member.country}</p>
    </div>
  );
}
