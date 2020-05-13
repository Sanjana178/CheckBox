import React, { Component } from "react";

import "./styles.css";
import CheckBox from "./checkedBox.jsx";

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      myCheckboxValue: false
    }
  }

  handleCheckboxClicked = (val) => {
    this.setState({
      myCheckboxValue: val
    });
  }

  render() {
    return <CheckBox triggerHandleClick={this.handleCheckboxClicked} />;
  }
}

export default App;
