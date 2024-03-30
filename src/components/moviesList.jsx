import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "../components/common/listGroup";
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import MoviesTable from "./common/moviesTable";
import _ from "lodash"

export default class MoviesList extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: getGenres()
    });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id != movie._id);
    this.setState({ movies: movies });
  };

  handleLiked = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies: movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleFilterGenre = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleOnSort = (sortColumn) => {
    this.setState({ sortColumn: sortColumn});
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state;

    const allGenres = [{ _id: "", name: "All Genres" }, ...genres];

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sortedMovies, currentPage, pageSize);
    if (count === 0) {
      return (
        <React.Fragment>
          <h1>There are no movies in the database</h1>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <h1>Showing {count} movies in database</h1>
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={allGenres}
              valueProperty={"name"}
              onClick={this.handleFilterGenre}
            />
          </div>
          <div className="col">
            <MoviesTable
              movies={movies}
              sortedColumn={sortColumn}
              onSort={this.handleOnSort}
              onDelete={this.handleDelete}
              onLiked={this.handleLiked}
            />
            <Pagination
              itemCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
