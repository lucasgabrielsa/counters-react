import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div className="p-2 mt-2">
        <button
          type="button"
          className="btn btn-info"
          onClick={this.props.onReset}
        >
          Reset All Counter
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={this.props.onReiniciar}
        >
          Reiniciar Contadores
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          >
            <h4> Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
