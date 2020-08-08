import React, { Component } from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";
import Preset from "./Preset";

class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => {
          return { options: options };
        });
      }
    } catch (e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  handleDeleteOptions = () => {
    this.setState(() => {
      return { options: [] };
    });
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return optionToRemove !== option;
        }),
      };
    });
  };

  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => {
      return { selectedOption: option };
    });
  };

  handleClearSelectedOption = () => {
    this.setState(() => {
      return { selectedOption: undefined };
    });
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add option.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists.";
    }

    this.setState((prevState) => {
      return { options: prevState.options.concat([option]) };
    });
  };

  onSavePreset = (presetNumber) => {
    const options = this.state.options;
    if (options.length > 0) {
      const json = JSON.stringify(options);
      localStorage.setItem(`preset-${presetNumber}`, json);
    }
  };

  onLoadPreset = (presetNumber) => {
    try {
      const json = localStorage.getItem(`preset-${presetNumber}`);
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => {
          return { options: options };
        });
      }
    } catch (e) {
      // Do nothing
    }
  };

  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePickOption={this.handlePickOption}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <Preset onLoadPreset={this.onLoadPreset} onSavePreset={this.onSavePreset}/>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
