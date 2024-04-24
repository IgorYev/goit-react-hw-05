import { useEffect, useState } from "react";
import { getMovies } from "../../../movie-api";
import MovieList from "../../MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <p>MoviesPage</p>
      {loading && <b>Loading movies...</b>}
      {error && <p>Oops! Something went wrong! </p>}
      {movies && movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
