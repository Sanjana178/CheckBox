import React, { Component } from "react";
import Loading from './loading.js';
import Done from './done.js';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleClick = () => {
    this.setState({
      loading: false,
      done: false
    });

    this.setState({
      checked: !this.state.checked
    });

    //faking loading
    setTimeout(() => {
      this.setState({ 
        loading: true,
      });
      setTimeout(() =>{
        this.setState({
          done: true
        });
      }, 1000);
    }, 1200);

    

    this.props.triggerHandleClick(this.state.checked);
  };

  render() {
    const isDone = this.state.done;
    const isChecked = this.state.checked;

    return (
      <div
        className="checkboxCon" onClick={this.handleClick}>
          {!isChecked ? <span className="text">Click me!</span> 
            : !isDone? <Loading /> 
            : <Done />
          }
      </div>
    );
  }
}

export default CheckBox;
