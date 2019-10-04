import React from "react";
import PlayerCard from "./PlayerCard";

export default function PlayerList(props) {
  return (
    <div>
      {props.players.map((list, index) => {
        return <PlayerCard key={index} member={list.index} member={list} />;
      })}
    </div>
  );
}
