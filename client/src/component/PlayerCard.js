import React from "react";
import { tsPropertySignature } from "@babel/types";

export default function PlayerCard(props) {
    return(
        <div>
            <p>{props.member.name}</p>
        </div>
    )
}