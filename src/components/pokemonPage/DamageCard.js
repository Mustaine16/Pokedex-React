import React from "react";

import DamageMultiplier from "./DamageMultiplier";

export default function DamageCard({
  types,
  calculatedDamage,
  index,
  relation
}) {
  const TypesTitle = () => {
    //Defense Title
    if (relation === "defense") {
      if (types.length >= 2) {
        return (
          <>
            <div
              className="defense-color"
              style={{
                background: ` 
                  linear-gradient(to right,var(--${types[0].type.name}-bg-open) 0%,
                  var(--${types[0].type.name}-bg-open) 50%,
                  var(--${types[1].type.name}-bg-open) 50%,
                  var(--${types[1].type.name}-bg-open) 100%)`
              }}
            >
              <span>{types[0].type.name}</span>
              <span>{types[1].type.name}</span>
            </div>
          </>
        );
      } else {
        return (
          <div className={types[index].type.name + "-cardy damage-type-title"}>
            {types[index].type.name}
          </div>
        );
      }
    }

    //Attack tittle
    return (
      <div className={types[index].type.name + "-cardy damage-type-title"}>
        {types[index].type.name}
      </div>
    );
  };

  return (
    <div className="offensive">
      <TypesTitle></TypesTitle>
      {calculatedDamage.map(multiplier => (
        <DamageMultiplier multiplier={multiplier} key={Math.random()} />
      ))}
    </div>
  );
}
