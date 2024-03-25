import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { genres, onClick } = this.props;
    return (
      <React.Fragment>
        <ul class="list-group">
          <li
            class="list-group-item"
            onClick={() => onClick("all")}
            style={{ cursor: "pointer" }}
          >
            All Genre
          </li>
          {genres.map((genre) => (
            <li
              class="list-group-item"
              onClick={() => onClick(genre)}
              style={{ cursor: "pointer" }}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default ListGroup;
