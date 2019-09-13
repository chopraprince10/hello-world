import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

//// When Child ClassWat to taka data from parent class

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: 'Parent'
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    //Backtics ``  :::::::: Template literals
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
