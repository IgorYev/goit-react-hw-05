import { Link } from "react-router-dom";

export default function MovieList({ movies, trendingMovies, location }) {
  const moviesToDisplay = trendingMovies || movies;

  return (
    <ul>
      {moviesToDisplay &&
        Array.isArray(moviesToDisplay) &&
        moviesToDisplay.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
