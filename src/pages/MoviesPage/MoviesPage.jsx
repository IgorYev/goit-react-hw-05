import { useEffect, useState } from "react";
import { getMovies } from "../../movie-api";
import MovieList from "../../components/MovieList/MovieList";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const query = searchParams.get("query") || "";
        const movieData = await getMovies(query);

        setMovies(movieData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [searchParams]);

  const handleSearchSubmit = (query) => {
    if (query) {
      setSearchParams({ query });
    }
  };

  return (
    <div className={css.pageContainer}>
      <div className={css.SearchForm}>
        <SearchBar onSubmit={handleSearchSubmit} />
        {loading && <b>Loading movies...</b>}
        {error && <p>Oops! Something went wrong! </p>}
        <MovieList movies={movies}>
          {(movie) => (
            <li key={movie.id}>
              <Link
                to={`${movie.id}`}
                state={{
                  from: location,
                }}
              >
                {movie.title}
              </Link>
            </li>
          )}
        </MovieList>
      </div>
    </div>
  );
}
