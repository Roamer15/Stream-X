import styles from "./LatestMovies.module.css";
import useFetchMovies from "../../hooks/useFetchMovies";
import PropTypes from "prop-types";

export default function LatestMovies({ API_KEY, BASE_URL, IMAGE_PATH }) {
  const latestUrl = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`;

  const { movies: latestMovies, loading, error } = useFetchMovies(latestUrl);

  if (loading) return <p>Loading popular movies...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Latest Movies</h1>
      <div className={styles.carousel}>
        {latestMovies.map((movie, index) => (
          <div className={styles.movie} key={movie.id}>
            {index + 1}
            <img
              src={
                movie.poster_path
                  ? `${IMAGE_PATH}${movie.poster_path}`
                  : "fallback_image_url"
              }
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}

LatestMovies.propTypes = {
    API_KEY: PropTypes.string.isRequired,
    BASE_URL: PropTypes.string.isRequired,
    IMAGE_PATH: PropTypes.string.isRequired,
  };
