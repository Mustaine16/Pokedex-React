import React from "react";

function Stats({ stats, types }) {
  const maxStat = Math.max(...[...stats].map(stat => stat.base_stat));
  const divider =
    maxStat >= 130 ? (maxStat / 90).toFixed(2) : (maxStat / 75).toFixed(2);
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
                  className={`stat-bar-bg`}
                  style={{
                    width:
                      maxStat > 100
                        ? stat["base_stat"] / divider + "%"
                        : stat["base_stat"] / 1.4 + "%"
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
