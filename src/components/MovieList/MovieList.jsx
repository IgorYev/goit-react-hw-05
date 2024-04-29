import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies, trendingMovies, location }) {
  const moviesToDisplay = trendingMovies || movies;

  return (
    <div className={css.movieListContainer}>
      <ul className={css.movieList}>
        {moviesToDisplay &&
          Array.isArray(moviesToDisplay) &&
          moviesToDisplay.map(({ id, title }) => (
            <li className={css.movieLi} key={id}>
              <Link
                className={css.home_link}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
