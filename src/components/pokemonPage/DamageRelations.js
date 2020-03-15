import React from "react";

import DamageCard from "./DamageCard";

export default function DamageRelations({ data, types }) {
  if (!data) {
    return "LOADING";
  }

  const { attack, defense } = data;



  if (data) {
    return (
      <div className="damage-container content">
        <h2 className="damage-title">Damage Relation</h2>

        <div className="container-att-def">
          {/* CONTAINER DE DEFENSA */}

          <div className="defensive-container">
            <h3 className="attack-title">Defense</h3>
            <div className="offensive-container-by-types">
              <DamageCard
                types={types}
                calculatedDamage={defense}
                index={0}
                relation="defense"
              />
            </div>
          </div>

          {/* CONTAINER DE ATAQUE */}

          <div className="offensive-container">
            <h3 className="attack-title">Attack</h3>

            <div className="offensive-container-by-types">
              {attack.map((type, i) => {
                
                return (
                  <DamageCard
                    types={types}
                    calculatedDamage={type}
                    index={i}
                    key={Math.random()}
                  />
                );
                
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
