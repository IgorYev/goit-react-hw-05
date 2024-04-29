import { useEffect, useState } from "react";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../../movie-api";
import GoBack from "../../GoBack/GoBack";
import css from "./MovieDetailsPage.module.css";

export default function MoviesDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <b>Movie not found.</b>;
  }

  if (loading) {
    return <p>Loading</p>;
  }

  const { release_date, popularity, poster_path, title, overview, genres } =
    movie;
  const fixedDate = release_date ? release_date.slice(0, 4) : "In ancient ages";
  const fixedScore = popularity
    ? Number.parseInt(popularity / 10)
    : "No score yet";
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  const fixedUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400${poster_path}`
    : defaultImg;

  return (
    <div className={css.container}>
      <GoBack
        style={{ marginLeft: "20px", marginTop: "10px", marginBottom: "10px" }}
        to={backLinkHref}
      >
        {"<-- "}Go back
      </GoBack>

      <div className={css.containerDop}>
        {poster_path === null ? (
          <img
            className={css.poster}
            src={defaultImg}
            alt={"here must be a poster"}
          />
        ) : (
          <img className={css.poster} src={fixedUrl} alt={title} />
        )}

        <div className={css.movieDetails}>
          <h1 className={css.title}>{title}</h1>
          <p className={css.releaseDate}>({fixedDate})</p>
          <p className={css.userScore}>User score: {fixedScore}%</p>
          {overview && (
            <>
              <h3 className={css.overview}>Overview</h3>
              <p>{overview}</p>
            </>
          )}
          {genres && genres.length > 0 && (
            <>
              <h3 className={css.genres}>Genres</h3>
              <ul>
                {genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
              <div className={css.additionalInfo}>
                <Link
                  className={css.additionalInfoLink}
                  to={`cast`}
                  state={location.state}
                >
                  Cast
                </Link>
                <Link
                  className={css.additionalInfoLink}
                  to={`reviews`}
                  state={location.state}
                >
                  Reviews
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <Outlet />
    </div>
  );
}
