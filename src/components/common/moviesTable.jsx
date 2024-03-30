import React, { Component } from "react";
import Like from "../common/like";
import TableHeaders from "./tableHeaders";
import TableBody from "./tableBody";

class MoviesTable extends Component {
  columns = [
    { label: "Title", path: "title" },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLiked(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            this.props.onDelete(movie);
          }}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortedColumn } = this.props;
    return (
      <React.Fragment>
        <table className="table">
          <TableHeaders
            columns={this.columns}
            onSort={onSort}
            sortedColumn={sortedColumn}
          />
          <TableBody
            data={movies}
            columns={this.columns}
          />
        </table>
      </React.Fragment>
    );
  }
}

export default MoviesTable;
