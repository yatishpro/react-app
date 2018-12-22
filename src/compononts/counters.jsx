import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  /******************************
   * Components
   * 1. Pass Data
   * 2. Raise and Handle Events
   * 3. Multiple Componints in Sync
   * 4. Functional Components
   * 5. Lifecycle Hooks
   * 6. Single source of truth(controlled components)
   */

  /*
   *=>Life Cycle hooks
   * 1. Mounting phase - initilization time
   *  a. constructor
   *  b. render
   *  c. componentDidMount
   *
   * 2. Update phase - state or props of the component get changed
   *  a. render
   *  b. componentDidUpdate
   *
   * 3. Unmount phase - when component removed from the dome
   *  a. componentWillUnmount
   */

  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    console.log("Counters - rendered");

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
