import React from "react";

function Stats() {
  return (
    <div className="stats-container">
      <div className="stats-row">
        <span>HP</span>
        <div className="stats-value-and-bar">
          <span className="stat-value">50</span>
          <div className="stat-bar">
            <div className="stat-bar-bg"></div>
          </div>
        </div>
      </div>
      <div className="stats-row">
        <span>Attack</span>
        <div className="stats-value-and-bar">
          <span className="stat-value">95</span>
          <div className="stat-bar">
            <div className="stat-bar-bg"></div>
          </div>
        </div>
      </div>
      <div className="stats-row">
        <span>Defense</span>
        <div className="stats-value-and-bar">
          <span className="stat-value">180</span>
          <div className="stat-bar">
            <div className="stat-bar-bg"></div>
          </div>
        </div>
      </div>
      <div className="stats-row">
        <span>Sp Att.</span>
        <div className="stats-value-and-bar">
          <span className="stat-value">85</span>
          <div className="stat-bar">
            <div className="stat-bar-bg"></div>
          </div>
        </div>
      </div>
      <div className="stats-row">
        <span>Sp Def.</span>
        <div className="stats-value-and-bar">
          <span className="stat-value">45</span>
          <div className="stat-bar">
            <div className="stat-bar-bg"></div>
          </div>
        </div>
      </div>
      <div className="stats-row">
        <span> Speed</span>
        <div className="stats-value-and-bar">
          <span className="stat-value">70</span>
          <div className="stat-bar">
            <div className="stat-bar-bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
