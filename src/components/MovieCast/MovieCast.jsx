import { fetchMovieCast } from "../../movie-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.error("Error fetching movie details:", error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieCast();
  }, [movieId]);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : !cast || cast.length === 0 ? (
        <p>Cast not found.</p>
      ) : (
        <ul>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w92${profile_path}`
                    : defaultImg
                }
                alt={name}
                width="120"
              />
              <h4>{name}</h4>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
