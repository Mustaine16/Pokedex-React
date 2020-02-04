import React from "react";
import "./TabMenu.css";

function TabMenu() {
  return (
    <nav>
      <ul>
        <li tabIndex="0">Description</li>
        <li tabIndex="0">Stats</li>
        <li tabIndex="0">Weakness</li>
      </ul>
    </nav>
  );
}

export default TabMenu;
