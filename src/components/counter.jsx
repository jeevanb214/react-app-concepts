import React, { Component } from "react";

class Counter extends Component {
  
  render() {
    console.log("props", this.props);
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)}>
          Increment
        </button>
      <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }

  /* getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.s.count === 0 ? "warning" : "primary";
    return classes;
  } */

  formatCount() {
    const {value}  = this.props.counter;
    return value === 0 ? "ZERO" : value;
  }
}

export default Counter;
