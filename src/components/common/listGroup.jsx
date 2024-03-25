import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { items, onClick, valueProperty } = this.props;
    return (
      <React.Fragment>
        <ul className="list-group">
          {items.map((item) => (
            <li
              key={item[valueProperty]}
              className="list-group-item"
              onClick={() => onClick(item)}
              style={{ cursor: "pointer" }}
            >
              {item[valueProperty]}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default ListGroup;
