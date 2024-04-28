import { useEffect, useState } from "react";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../../movie-api";
import css from "./MovieDetailsPage.module.css";


export default function MoviesDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

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
      {poster_path === null ? (
        <img src={defaultImg} alt={"here must be a poster"} />
      ) : (
        <img src={fixedUrl} alt={title} />
      )}

      <div>
        <h1>{title}</h1>
        <p>({fixedDate})</p>
        <p>User score: {fixedScore}%</p>
        {overview && (
          <>
            <h3>Overview</h3>
            <p>{overview}</p>
          </>
        )}
        {genres && genres.length > 0 && (
          <>
            <h3>Genres</h3>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
            <ul>
              <h2>Additional information</h2>
              <ul>
                <li>
                  <Link to={`cast`} state={location.state}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link to={`reviews`} state={location.state}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </ul>
          </>
        )}
      </div>

      <Outlet />
    </div>
  );
}

{
  /* <div>
              <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
              </Suspense>
            </div> */
}
