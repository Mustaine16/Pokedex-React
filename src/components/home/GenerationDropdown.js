import React from "react";

import "./styles/GenerationDropdown.css";

function GenerationDropdown(props) {
  return (
    <select onChange={props.onChange}>
      <option value="1">Generation 1</option>
      <option value="2">Generation 2</option>
      <option value="3">Generation 3</option>
      <option value="4">Generation 4</option>
      <option value="5">Generation 5</option>
      <option value="6">Generation 6</option>
      <option value="7">Generation 7</option>
    </select>
  );
}

export default GenerationDropdown;
