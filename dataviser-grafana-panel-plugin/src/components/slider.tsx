import React from "react";

function Slider() {
  return (
    <>
      <div
        className="slider"
        style={{
          position: "relative",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          width: "100%",
          height: "30px",
          backgroundColor: "rgba(255, 2, 51, .1)"
        }}
      >
        Slider
      </div>
    </>
  );
}

export default Slider;
