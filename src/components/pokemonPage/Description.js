import React from "react";

import "./css/Description.css";

function Description({ description, weight, height }) {
  return (
    <article className="content">
      <p className="description">{description}</p>
      <div className="info-container">
        <div className="info-boxes">
          <span>Height</span>
          <span>{(height / 10).toFixed(2)} ""</span>
        </div>
        <div className="info-boxes">
          <span>Weight</span>
          <span>{(weight / 10).toFixed(2)} Kg</span>
        </div>
      </div>
    </article>
  );
}

export default Description;
