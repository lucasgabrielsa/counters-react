import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/nav-bar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 4 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("handleDelete called", counterId);
    this.setState({
      counters: this.state.counters.filter(counter => counter.id !== counterId)
    });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleResetAllCounter = () => {
    console.log("handleResetAllCounter");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    console.log("counters", counters);
  };

  handleReiniciar = () => {
    this.setState({
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 4 },
        { id: 4, value: 0 }
      ]
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleResetAllCounter}
            onReiniciar={this.handleReiniciar}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
