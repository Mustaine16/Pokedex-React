import React from "react";

function Loader({background}) {
  // alert(background)
  return (
    <div className={"modal-loader-container default"} >
      <div className="modal-loader"></div>
    </div>
  );
}

export default Loader;
