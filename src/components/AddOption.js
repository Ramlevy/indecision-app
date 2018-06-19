import React, { Component } from 'react';
  
  class AddOption extends Component {
    state = {
      error: undefined
    };

    handleAddOption = (e) => {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
  
      this.setState(() => { return { error } });
      if(!error)
        e.target.elements.option.value = '';
  
    }
  
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input autoFocus type="text" name="option" />
            <button className="button">Add Option</button>
          </form>
        </div>
      );
    }
  }

  export default AddOption;  