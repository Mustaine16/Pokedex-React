import React from "react";

export default function TypeBubble({ type }) {
  return <div className={"type-cardy " + type + "-cardy"}>{type}</div>;
}
