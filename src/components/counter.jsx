import React, { Component } from "react";

class Counter extends Component {
  handleClasses = () => {
    let classes = "badge m-2 text-bg-";
    return this.props.counter.value === 0
      ? (classes += "warning")
      : (classes += "primary");
  };

  handleValue = () => {
    return this.props.counter.value == 0 ? "Zero" : this.props.counter.value;
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={this.handleClasses()}>{this.handleValue()}</span>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                this.props.onIncreament(this.props.counter);
              }}
            >
              +
            </button>
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() => {
                this.props.onDecreament(this.props.counter);
              }}
              disabled={this.props.counter.value == 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                this.props.onDelete(this.props.counter.id);
              }}
            >
              X
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
