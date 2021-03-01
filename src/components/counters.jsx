import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    return (
      <div>
        {
        this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            selected={true}
          />
        ))}
        {/* here key is the inbuild attribute which makes the component to identify uniquely */}
      </div>
    );
  }
}

export default Counters;
