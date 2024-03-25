import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {counters, onReset, onDelete, onIncreament, onDecreament} = this.props
    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncreament={onIncreament}
            onDecreament={onDecreament}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
