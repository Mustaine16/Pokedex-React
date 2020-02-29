import React from 'react';

export default function SearchMenu(props){
  return(
    <div className="search-text">
    <input
      type="text"
      className="search-input"
      placeholder="Search for a Pokemon..."
      onChange={props.onChangeName}
    />
    <button className="clear-search"></button>
  </div>
  )
}