import React from "react";

function stringToMultiple(string) {
  switch (string) {
    case "double":
      return "X2";
      break;
    case "half":
      return "X0.5";
      break;
    case "none":
      return "X0";
      break;
    default:
      break;
  }
}

export default function Weakness({ data, types }) {
  if (!data) {
    return "LOADING";
  }

  const { attack } = data;
  if (data) {
    return (
      <div class="damage-container content">
        <h2 class="damage-title">Damage Relation</h2>

        <div class="container-att-def">
          {/* CONTAINER DE ATAQUE */}
          <div class="offensive-container">
            <h3 class="attack-title">Attack</h3>

            <div class="offensive-container-by-types">
              {attack.map((type, i) => {
                return (
                  <div class="offensive">
                    <div
                      class={
                        types[i].type.name + "-cardy " + "damage-type-title"
                      }>
                      grass
                    </div>
                    {type.map(multiplier => {
                      const typesInRelation = Object.values(multiplier)[0];
                      console.log(typesInRelation);

                      if (typesInRelation.length > 0) {
                        const multiplierName = stringToMultiple(
                          Object.keys(multiplier)[0]
                        );

                        return (
                          <div class="counter-container">
                            <p class="counter">{multiplierName}</p>
                            <div class="counter-types">
                              {typesInRelation.map((type, i) => {
                                return (
                                  <div
                                    className={"type-cardy " + type + "-cardy"}>
                                    {type}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          {/* <div class="defensive-container">
          <div class="defense-title">Takes damage from</div>
          <div class="defensive">
            <div
              class="defense-color"
              style={{
                background:
                  "linear-gradient(to right,var(--grass-bg-open) 0%, var(--grass-bg-open) 50%,var(--poison-bg-open) 50%, var(--poison-bg-open) 100%)"
              }}>
              <span>grass</span>
              <span>poison</span>
            </div>
            <div class="counter-container">
              <p class="counter">X2</p>
              <div class="counter-types">
                <div class="type-cardy psychic-cardy">psychic</div>
                <div class="type-cardy flying-cardy">flying</div>
                <div class="type-cardy fire-cardy">fire</div>
                <div class="type-cardy ice-cardy">ice</div>
              </div>
            </div>
            <div class="counter-container">
              <p class="counter">X0.5</p>
              <div class="counter-types">
                <div class="type-cardy fighting-cardy">fighting</div>
                <div class="type-cardy fairy-cardy">fairy</div>
                <div class="type-cardy water-cardy">water</div>
                <div class="type-cardy electric-cardy">electric</div>
              </div>
            </div>
            <div class="counter-container">
              <p class="counter">X0.25</p>
              <div class="counter-types">
                <div class="type-cardy grass-cardy">grass</div>
              </div>
            </div>
          </div>
        </div>*/}
        </div>
      </div>
    );
  }
}
