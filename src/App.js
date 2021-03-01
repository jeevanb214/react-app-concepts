import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    console.log("In handleIncremet", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log("In handleIncremet index", index);
    counters[index] = { ...counter }; /* to clone the object that we  recived */
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {};

  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>

        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
