import React from "react";
import "./TabMenu.css";

function TabMenu() {
  return (
    <>
      <input type="radio" id="descr" name="tabs" />
      <label htmlFor="descr">Description</label>

      <input type="radio" id="stats" name="tabs" />
      <label htmlFor="stats">Stats</label>

      <input type="radio" id="weakness" name="tabs" />
      <label htmlFor="weakness">Weakness</label>
    </>
  );
}

export default TabMenu;
