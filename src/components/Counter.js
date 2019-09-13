import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  //Second Parameter is a call back function in set state
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log("Counter Value In CallBack : ", this.state.count); //This is Async
    //   }
    // );

    this.setState(prevState => ({
      count: prevState.count + 1
    }));

    //This is Sync Console
    console.log("Counter Value", this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count} </div>
        {/* <button onClick={() => this.increment()}>Increment </button> */}
        <button onClick={() => this.incrementFive()}>Increment </button>
      </div>
    );
  }
}

export default Counter;
