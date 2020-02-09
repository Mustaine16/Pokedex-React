import React from "react";

function Stats({ stats, types }) {
  return (
    <div className="stats-container content">
      {[...stats].reverse().map(stat => {
        return (
          <div className="stats-row" key={stat["stat"]["name"]}>
            <span>{stat["stat"]["name"]}</span>
            <div className="stats-value-and-bar">
              <span className="stat-value">{stat["base_stat"]}</span>
              <div className="stat-bar">
                <div
                  className={`stat-bar-bg ${types[0].type.name}-cardy`}
                  style={{
                    width:
                      stat["base_stat"] > 180
                        ? stat["base_stat"] / 2.55 + "%"
                        : stat["base_stat"] / 1.8 + "%"
                  }}></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stats;
