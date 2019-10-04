import React from "react";
import PlayerCard from "./PlayerCard";

export default function PlayerList(props) {
  return (
    <div>
      {props.players.map(member => {
        return <PlayerCard member={member.id} member={member} />;
      })}
    </div>
  );
}
