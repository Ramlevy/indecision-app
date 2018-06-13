import React, { Component } from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'

class IndecisionApp extends Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.handlePickOption = this.handlePickOption.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        options: []
      }; 
    }
  
    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if (options) {
          this.setState(() => { return { options: options }});
        }
      } catch (e) {
        // Do nothing
      }
        
    }
  
    componentDidUpdate(prevProps, prevState) {
      if(prevState.options.length !== this.state.options.length)
      {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  
    handleDeleteOptions() {
      this.setState(() => { return { options: [] } });
    }
  
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => {
        return {
            options: prevState.options.filter((option) => {
            return optionToRemove !== option;
          })
        }
      });
    }
  
    handlePickOption() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
  
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add option.'
      }
      else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists.'
      }
  
      this.setState((prevState) => { return { options: prevState.options.concat([option]) } });
    }
  
    render() {
      const subtitle = 'Put your life in the hands of a computer'
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePickOption={this.handlePickOption} />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }

  export default IndecisionApp;