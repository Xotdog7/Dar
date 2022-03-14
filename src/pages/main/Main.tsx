import React from "react";
import MoviesList from "../../components/moviesList/MoviesList";
import ActorList from "../../components/actorList/ActorList";
import { actors, movies } from "../../mock";

const Main = () => {
  return (
    <div style={{ display: "flex", justifyContent:'space-between',  maxWidth: "1000px", margin: "0 auto" }}>
      <div>
        <h2>Movies ({movies.length})</h2>
        <MoviesList movies={movies} />
      </div>

      <div>
        <h2>Actors ({actors.length})</h2>
        <ActorList actors={actors} />
      </div>
    </div>
  );
};

export default Main;
