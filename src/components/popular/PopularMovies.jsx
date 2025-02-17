import styles from "./PopularMovies.module.css";
import useFetchMovies from "../../hooks/useFetchMovies";
import PropTypes from "prop-types";

export default function PopularMovies({ API_KEY, BASE_URL, IMAGE_PATH, path, detail }) {
  const popularUrl = `${BASE_URL}/movie/${path}?api_key=${API_KEY}`;

  const { movies: latestMovies, loading, error } = useFetchMovies(popularUrl);

  if (loading) return <p>Loading popular movies...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(latestMovies)

  return (
    <>
      <h1>Top Searches</h1>
      <div className={styles.carouselPopular}>
        {latestMovies.map((movie) => (
          <div className={styles.moviePopular} key={movie.id}>
            <img
              src={
                movie.poster_path
                  ? `${IMAGE_PATH}${movie.poster_path}`
                  : "fallback_image_url"
              }
              alt={movie.title}
              onClick={()=> detail(movie)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

PopularMovies.propTypes = {
    API_KEY: PropTypes.string.isRequired,
    BASE_URL: PropTypes.string.isRequired,
    IMAGE_PATH: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    detail: PropTypes.func
  };
