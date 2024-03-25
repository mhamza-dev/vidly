import React, { Component } from "react";
import Like from "../common/like";

class MoviesTable extends Component {
  sortRaised = (path) => {
    const sortedColumn = { ...this.props.sortColumn };
    if (sortedColumn.path === path) {
      sortedColumn.order = sortedColumn.order == "asc" ? "desc" : "asc";
    } else {
      sortedColumn.path = path;
      sortedColumn.order = "asc";
    }
    this.props.onSort(sortedColumn);
  };
  render() {
    const { movies, onDelete, onLiked } = this.props;
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => this.sortRaised("title")} scope="col">
                Title
              </th>
              <th onClick={() => this.sortRaised("genre.name")} scope="col">
                Genre
              </th>
              <th onClick={() => this.sortRaised("numberInStock")} scope="col">
                Stock
              </th>
              <th
                onClick={() => this.sortRaised("dailyRentalRate")}
                scope="col"
              >
                Rate
              </th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td scope="row">{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like liked={movie.liked} onClick={() => onLiked(movie)} />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      onDelete(movie);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MoviesTable;
