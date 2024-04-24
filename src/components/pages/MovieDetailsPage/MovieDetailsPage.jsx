// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchMovieDetails } from "../../../movie-api";

// export default function MoviesDetailsPage() {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);

//   //   const location = useLocation();
//   //   const backLinkHref = location.state?.from ?? "/";

//   useEffect(() => {
//     const getMovieDetails = async () => {
//       try {
//         const data = await fetchMovieDetails(movieId);
//         setMovie(data);
//       } catch (error) {
//         console.error("Error fetching movie details:", error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getMovieDetails();
//   }, [movieId]);

//   //   if (loading) {
//   //     return <LoadingMessage>Loading</LoadingMessage>;
//   //   }

//   //   if (!movie) {
//   //     return <MovieNotFound>Movie not found.</MovieNotFound>;
//   //   }

//   const { release_date, popularity, poster_path, title, overview, genres } =
//     movie;
//   const fixedDate = release_date ? release_date.slice(0, 4) : "In ancient ages";
//   const fixedScore = popularity
//     ? Number.parseInt(popularity / 10)
//     : "No score yet";
//   const fixedUrl = `https://image.tmdb.org/t/p/w185${poster_path}`;
//   const defaultImg =
//     "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";

//   return (
//     <div>
//       {poster_path === null ? (
//         <img src={defaultImg} alt={"here must be a poster"} />
//       ) : (
//         <img src={fixedUrl} alt={title} />
//       )}

//       <div>
//         <h1>{title}</h1>
//         <p>({fixedDate})</p>
//         <p>User score: {fixedScore}%</p>
//         {overview && (
//           <>
//             <h3>Overview</h3>
//             <p>{overview}</p>
//           </>
//         )}
//         {genres && genres.length > 0 && (
//           <>
//             <h3>Genres</h3>
//             <ul>
//               {genres.map(({ id, name }) => (
//                 <li key={id}>{name}</li>
//               ))}
//             </ul>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
