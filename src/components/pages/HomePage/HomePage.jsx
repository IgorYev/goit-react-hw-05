import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchTrends } from "../../../movie-api";

import css from "./HomePage.module.css";

import MovieList from "../../MovieList/MovieList";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchTrends();
        setTrendingMovies(data);
      } catch (error) {
        console.error("Error fetching trending movies:", error.message);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div className={css.pageContainer}>
      <h1 className={css.mainHeadline}>Trending today</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MovieList trendingMovies={trendingMovies} location={location} />
      )}
    </div>
  );
}
