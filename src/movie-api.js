import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getMovies = async (query) => {
  const response = await axios.get("search/movie", {
    params: {
      query,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTU2NTcyNDI1MTE2OTk4OGYzMmU1NzUzNWIzOTc0NCIsInN1YiI6IjY1MjgzNDhiZWE4NGM3MDBhZWYxNmJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZs4xf0rwE6xZrEahhO9_AmeHNCkCAQhdm988z2sjFA",
    },
  });
  return response.data.results;
};

export const fetchTrends = async () => {
  try {
    const response = await axios.get("trending/movie/week", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTU2NTcyNDI1MTE2OTk4OGYzMmU1NzUzNWIzOTc0NCIsInN1YiI6IjY1MjgzNDhiZWE4NGM3MDBhZWYxNmJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZs4xf0rwE6xZrEahhO9_AmeHNCkCAQhdm988z2sjFA",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const fetchMovieDetails = async (movie_id) => {
  try {
    const response = await axios.get(`movie/${movie_id}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTU2NTcyNDI1MTE2OTk4OGYzMmU1NzUzNWIzOTc0NCIsInN1YiI6IjY1MjgzNDhiZWE4NGM3MDBhZWYxNmJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZs4xf0rwE6xZrEahhO9_AmeHNCkCAQhdm988z2sjFA",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const fetchMovieCast = async (movie_id) => {
  try {
    const response = await axios.get(`movie/${movie_id}/credits`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTU2NTcyNDI1MTE2OTk4OGYzMmU1NzUzNWIzOTc0NCIsInN1YiI6IjY1MjgzNDhiZWE4NGM3MDBhZWYxNmJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZs4xf0rwE6xZrEahhO9_AmeHNCkCAQhdm988z2sjFA",
      },
    });
    const { cast } = response.data;
    return cast;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const fetchMovieReviews = async (movie_id) => {
  try {
    const response = await axios.get(`movie/${movie_id}/reviews`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTU2NTcyNDI1MTE2OTk4OGYzMmU1NzUzNWIzOTc0NCIsInN1YiI6IjY1MjgzNDhiZWE4NGM3MDBhZWYxNmJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZs4xf0rwE6xZrEahhO9_AmeHNCkCAQhdm988z2sjFA",
      },
    });

    const { results } = response.data;
    return results;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
