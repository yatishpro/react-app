import React, { Component } from "react";

class Counter extends Component {
  /*******************************************
 * The Below expample contains:-
 * 1. React Fragment to escape '<div>' element
 * 2. Inline Styles
 * 3. Rendering Dynamic Class Names
 * 4. Rendering List using Maps
 * 5. React Methods to simplify code
 *******************************************
  
   state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontWeight: "bold",
    fontSize: 20
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  */
  /*******************************
   * The Below expample contains:-
   * 1.Conditional rendring
   *******************************

  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please Create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
  */
  /****************************
   * The Below expample contains:-
   * 1. On Click Event Handling or Handling events
   * 2. Setting setState method to keep sync between DOM and Virtual DOM
   * 3. Updating the state or components
   *****************************/

  // state = {
  //   count: this.props.counter.value
  // };

  styles = {
    fontWeight: "bold",
    fontSize: 20
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  deleteCouter = () => {
    this.props.onDelete(this.props.counter.id);
  };
  incrementCounter = () => {
    this.props.onIncrement(this.props.counter);
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call to get new data form the server
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    console.log("Counter - rendered");

    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.incrementCounter}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.deleteCouter}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
