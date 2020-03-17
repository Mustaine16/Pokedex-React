import React from "react";
import "./css/TabMenu.css";

function TabMenu({handleActiveTab}) {
  return (
    <form className="tabs-container" onChange={(event)=>handleActiveTab(event.target.id)}>
      <input type="radio" id="description" name="tabs" />
      <label htmlFor="description">Description</label>

      <input type="radio" id="damageContainer" name="tabs" />
      <label htmlFor="damageContainer">Damage </label>


      <input type="radio" id="stats" name="tabs" />
      <label htmlFor="stats">Stats</label>

      <input type="radio" id="evolutions" name="tabs" />
      <label htmlFor="evolutions">Evolutions</label>
    </form>
  );
}

export default TabMenu;
