import React from "react";

export default function Types({ types }) {
  return (
    <div className="types">
      {types.reverse().map(e => {
        return (
          <span key={e.slot} className={`${e.type.name}-cardy type`}>
            {e.type.name}
          </span>
        );
      })}
    </div>
  );
}
