import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "../components/common/listGroup";
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import MoviesTable from "./common/moviesTable";

export default class MoviesList extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = (movie) => {
    console.log(movie);
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

  handleFilterGenre = (genre) => {
    const movies = [...this.state.movies];
    const filteredMovies =
      genre == "all"
        ? movies
        : movies.filter((m) => m.genre.name == genre.name);
    this.setState({ movies: filteredMovies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies, genres } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);
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
            <ListGroup genres={genres} onClick={this.handleFilterGenre} />
          </div>
          <div className="col">
            <MoviesTable
              movies={movies}
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
