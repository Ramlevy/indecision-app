import React from "react";

const LoadPreset = (props) => {
  var i = props.count;
  return <button className="button-preset" onClick={() => props.onLoadPreset(`${i}`)}>
    Load Preset #{i}
  </button>;
};

export default LoadPreset;
