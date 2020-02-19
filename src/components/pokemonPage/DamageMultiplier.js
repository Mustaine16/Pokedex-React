import React from "react";

import TypeBubble from "../commons/typeBubble";

function stringToMultiple(string) {
  switch (string) {
    case "quadruple":
      return "X4";

    case "double":
      return "X2";

    case "half":
      return "X0.5";

    case "quarter":
      return "X0.25";

    case "none":
      return "X0";

    default:
  }
}

export default function DamageMultiplier({ multiplier }) {
  const typesInRelation = Object.values(multiplier)[0];
  const multiplierName = stringToMultiple(Object.keys(multiplier)[0]);

  if (typesInRelation.length === 0) {
    return null;
  }

  return (
    <div className="counter-container">
      <p className="counter">{multiplierName}</p>
      <div className="counter-types">
        {typesInRelation.map((type, i) => (
          <TypeBubble type={type} key={Math.random()}></TypeBubble>
        ))}
      </div>
    </div>
  );
}
