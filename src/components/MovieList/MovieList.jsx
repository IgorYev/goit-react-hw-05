import { Link } from "react-router-dom";

export default function MovieList({ trendingMovies, location }) {
  return (
    <ul>
      {trendingMovies &&
        Array.isArray(trendingMovies) &&
        trendingMovies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
