import React from "react";
import { Movie } from "../../types";
import MovieItem from "../movieItem/MovieItem";

type Props = {
  movies: Movie[];
};

const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div >
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
