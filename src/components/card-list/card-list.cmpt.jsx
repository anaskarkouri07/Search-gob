import React from "react";
import { Card } from "../card/card.cmpt";
import "./card-list.style.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monst) => (
        <Card key={monst.id} monster={monst} />
      ))}
    </div>
  );
};
