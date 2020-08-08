import React from "react";
import SavePreset from "./SavePreset";
import LoadPreset from "./LoadPreset";

const Preset = (props) => (
  //<React.Fragment>
  <div>
    <div className="SavePreset">
      <SavePreset count={1} onSavePreset={props.onSavePreset} />
      <SavePreset count={2} onSavePreset={props.onSavePreset} />
      <SavePreset count={3} onSavePreset={props.onSavePreset} />
    </div>
    <div className="LoadPreset">
      <LoadPreset count={1} onLoadPreset={props.onLoadPreset} />
      <LoadPreset count={2} onLoadPreset={props.onLoadPreset} />
      <LoadPreset count={3} onLoadPreset={props.onLoadPreset} />
    </div>
  </div>
);

export default Preset;