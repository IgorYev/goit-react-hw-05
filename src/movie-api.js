import axios from "axios";

const apiKey = "61565724251169988f32e57535b39744";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getMovies = async (query) => {
  const response = await axios.get("search/movie", {
    params: {
      api_key: apiKey,
      query,
    },
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTU2NTcyNDI1MTE2OTk4OGYzMmU1NzUzNWIzOTc0NCIsInN1YiI6IjY1MjgzNDhiZWE4NGM3MDBhZWYxNmJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZs4xf0rwE6xZrEahhO9_AmeHNCkCAQhdm988z2sjFA",
    },
  });
  return response.data.results;
};

export const fetchTrends = async () => {
  try {
    const response = await axios.get("trending/movie/week", {
      params: {
        api_key: apiKey,
      },
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTU2NTcyNDI1MTE2OTk4OGYzMmU1NzUzNWIzOTc0NCIsInN1YiI6IjY1MjgzNDhiZWE4NGM3MDBhZWYxNmJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZs4xf0rwE6xZrEahhO9_AmeHNCkCAQhdm988z2sjFA",
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
      params: {
        api_key: apiKey,
      },
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTU2NTcyNDI1MTE2OTk4OGYzMmU1NzUzNWIzOTc0NCIsInN1YiI6IjY1MjgzNDhiZWE4NGM3MDBhZWYxNmJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NZs4xf0rwE6xZrEahhO9_AmeHNCkCAQhdm988z2sjFA",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

// export const fetchMovieCast = async (movie_id) => {
//   try {
//     const response = await axios.get(`${baseURL}${movie_id}/credits`, config);
//     const { cast } = response.data;
//     return cast;
//   } catch (error) {
//     console.error("Error:", error.message);
//     throw error;
//   }
// };
