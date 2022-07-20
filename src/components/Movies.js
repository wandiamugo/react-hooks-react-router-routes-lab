import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesList= movies.map((movie) => (
    <div key={movie.title}>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <ul>
        <li>{movie.genres}</li>
      </ul>
    </div>
  ))
  return <div>
    <h1>Movies Page</h1>
    {moviesList}
  </div>;
}

export default Movies;
