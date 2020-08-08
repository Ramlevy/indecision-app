import React from "react";

const SavePreset = (props) => {
  var i = props.count;
  return <button className="button-preset" onClick={() => props.onSavePreset(`${i}`)}>
    Save Preset #{i}
  </button>;
};

export default SavePreset;
