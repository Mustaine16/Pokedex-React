import React, { useState, useEffect } from "react";

import Weaknesses from "../components/pokemonPage/Weaknesses";

export default function WeaknessesContainer(props) {
  const { types } = props;
  const [damageRelations, setDamageRelations] = useState();

  useEffect(() => {
    const calculateDamageRelations = async types => {
      let calculatedDamage = {
        attack: [
          [{ double: [] }, { half: [] }, { none: [] }],
          [{ double: [] }, { half: [] }, { none: [] }]
        ],
        defense: [
          { quadruple: [] },
          { double: [] },
          { half: [] },
          { quarter: [] },
          { none: [] }
        ]
      };

      //Arrays para pushear cada tipo y despues comparar y ver si se encuentra, y a partir de ahi calcular x4- x2- x0.5- x0.25 o none
      let defDbArr = [];
      let defHalfArr = [];
      let defNoneArr = [];
      let defQuadrupleArr = [];
      let defQuarterArr = [];

      for (let i = 0; i < types.length; i++) {
        const url = types[i].type.url;
        await fetch(`${url}`)
          .then(res => res.json())
          .then(res => {
            /*********************
             *
             *
             * Attacking Damage
             *
             *
             *********************/
            const attDouble = res.damage_relations.double_damage_to;
            const attHalf = res.damage_relations.half_damage_to;
            const attNone = res.damage_relations.no_damage_to;
            //---Double
            for (let index = 0; index < attDouble.length; index++) {
              calculatedDamage.attack[i][0].double.push(attDouble[index].name);
            }
            //---Half
            for (let index = 0; index < attHalf.length; index++) {
              calculatedDamage.attack[i][1].half.push(attHalf[index].name);
            }
            //---None
            for (let index = 0; index < attNone.length; index++) {
              calculatedDamage.attack[i][2].none.push(attNone[index].name);
            }
            //--If the pokemon only have 1 type, eliminate the second array of CalcultadeDamage
            if (types.length === 1) {
              calculatedDamage.attack.pop();
            }
            /*********************
             *
             *
             * Defensive Damage
             *
             *
             *********************/
            const defDouble = res.damage_relations.double_damage_from;
            const defHalf = res.damage_relations.half_damage_from;
            const defNone = res.damage_relations.no_damage_from;

            //En el primer tipo simplemente se pushea todo, y en el segundo se verifica/compara/calcula las resistencias y debilidades finales
            if (i === 0) {
              //Double
              for (let index = 0; index < defDouble.length; index++) {
                defDbArr.push(defDouble[index].name);
              }
              //Half
              for (let index = 0; index < defHalf.length; index++) {
                defHalfArr.push(defHalf[index].name);
              }
              //None
              for (let index = 0; index < defNone.length; index++) {
                defNoneArr.push(defNone[index].name);
              }
              //En caso de que el pokemon solo sea de un Tipo
              if (types.length === 1) {
                //Pushear los arrays Defensivos al Objeto Model Final
                defDbArr.length > 0
                  ? defDbArr.forEach(e => {
                      //calculatedDamage.defense.double.push(e)
                      calculatedDamage.defense[1].double.push(e);
                    })
                  : console.log("none double");
                defHalfArr.length > 0
                  ? defHalfArr.forEach(e => {
                      // calculatedDamage.defense.half.push(e)
                      calculatedDamage.defense[2].half.push(e);
                    })
                  : console.log("none half");
                defNoneArr.length > 0
                  ? defNoneArr.forEach(e => {
                      // calculatedDamage.defense.none.push(e)
                      calculatedDamage.defense[4].none.push(e);
                    })
                  : console.log("none none");
              }
            } else {
              //Double
              for (let index = 0; index < defDouble.length; index++) {
                verify(defDouble[index].name, "double");
              }
              //Half
              for (let index = 0; index < defHalf.length; index++) {
                verify(defHalf[index].name, "half");
              }
              //None
              for (let index = 0; index < defNone.length; index++) {
                verify(defNone[index].name, "none");
              }
              //Pushear los arrays al Objeto Model Final

              //X4
              defQuadrupleArr.length > 0
                ? defQuadrupleArr.forEach(e =>
                    calculatedDamage.defense[0].quadruple.push(e)
                  )
                : console.log("none Quadruple");
              //X2
              defDbArr.length > 0
                ? defDbArr.forEach(e =>
                    calculatedDamage.defense[1].double.push(e)
                  )
                : console.log("none double");
              //X0.5
              defHalfArr.length > 0
                ? defHalfArr.forEach(e =>
                    calculatedDamage.defense[2].half.push(e)
                  )
                : console.log("none half");
              //0.25
              defQuarterArr.length > 0
                ? defQuarterArr.forEach(e =>
                    calculatedDamage.defense[3].quarter.push(e)
                  )
                : console.log("none quarter");
              //X0
              defNoneArr.length > 0
                ? defNoneArr.forEach(e =>
                    calculatedDamage.defense[4].none.push(e)
                  )
                : console.log("none none");
            }
          });
      }
      // Verifica si existen calculos a realizar, ya sea multiplicando o dividiendo daño. Por ejemplo, transformar un daño de X2 a X4, o de X2 a None, etc.
      function verify(stat, value) {
        switch (value) {
          case "double":
            if (defDbArr.some(e => e === `${stat}`) && stat) {
              //Busca el indice del elemento y luego lo elimina en Double
              let i = defDbArr.indexOf(stat);
              defDbArr.splice(i, 1);
              //Pushear en Quadruple
              defQuadrupleArr.push(stat);
            } else if (defHalfArr.some(e => e === `${stat}`) && stat) {
              //Busca el indice del elemento y luego lo elimina en Half
              let i = defHalfArr.indexOf(stat);
              defHalfArr.splice(i, 1);
            } else if (!(defNoneArr.some(e => e === stat) && stat)) {
              //Se pushea de manera normal
              defDbArr.push(stat);
            }
            break;
          case "half":
            if (defDbArr.some(e => e === `${stat}`)) {
              //Busca el indice del elemento y luego lo elimina en Double
              let i = defDbArr.indexOf(stat);
              defDbArr.splice(i, 1);
            } else if (defHalfArr.some(e => e === `${stat}`)) {
              //Busca el indice del elemento y luego lo elimina en Half
              let i = defHalfArr.indexOf(stat);
              defHalfArr.splice(i, 1);
              //Pushea el valor a 0.25x
              defQuarterArr.push(stat);
            } else if (!(defNoneArr.some(e => e === stat) && stat)) {
              //Se pushea de manera normal
              defHalfArr.push(stat);
            }
            break;
          case "none":
            if (defDbArr.some(e => e === `${stat}`)) {
              //Busca el indice del elemento y luego lo elimina en Double
              let i = defDbArr.indexOf(stat);
              defDbArr.splice(i, 1);
              //Pushea el valor a None
              defNoneArr.push(stat);
            } else if (defHalfArr.some(e => e === `${stat}`)) {
              //Busca el indice del elemento y luego lo elimina en Half
              let i = defHalfArr.indexOf(stat);
              defHalfArr.splice(i, 1);
              //Pushea el valor a None
              defNoneArr.push(stat);
            } else if (!defNoneArr.some(e => e === stat)) {
              //Se pushea normalmente
              defNoneArr.push(stat);
            }
            break;
          default:
            break;
        }
      }

      setDamageRelations(calculatedDamage);
    };
    calculateDamageRelations(types);
  }, [types]);

  return <Weaknesses data={damageRelations} types={types}></Weaknesses>;
}
