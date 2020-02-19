import React from "react";

import DamageMultiplier from "./DamageMultiplier";

export default function DamageCard({ types, type, index }) {
  return (
    <div className="offensive">
      <div className={types[index].type.name + "-cardy damage-type-title"}>
        {types[index].type.name}
      </div>
      {type.map(multiplier => (
        <DamageMultiplier multiplier={multiplier} key={Math.random()} />
      ))}
    </div>
  );
}
