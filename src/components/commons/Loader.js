import React from "react";

function Loader({background}) {
  // alert(background)
  return (
    <div className={"modal-loader-container " + background} >
      <div className="modal-loader"></div>
    </div>
  );
}

export default Loader;
