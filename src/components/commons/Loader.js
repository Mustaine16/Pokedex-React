import React from "react";

function Loader({background}) {
  // alert(background)
  return (
    <div class={"modal-loader-container " + background} >
      <div class="modal-loader"></div>
    </div>
  );
}

export default Loader;
