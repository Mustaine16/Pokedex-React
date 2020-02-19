import React from "react";
import "./css/TabMenu.css";

function TabMenu() {
  return (
    <>
      <input type="radio" id="descr" name="tabs" />
      <label htmlFor="descr">Description</label>

      <input type="radio" id="stats" name="tabs" />
      <label htmlFor="stats">Stats</label>

      <input type="radio" id="Damage Relation" name="tabs" />
      <label htmlFor="Damage Relation">Damage </label>

      <input type="radio" id="evolutions" name="tabs" />
      <label htmlFor="evolutions">Evolutions</label>
    </>
  );
}

export default TabMenu;
