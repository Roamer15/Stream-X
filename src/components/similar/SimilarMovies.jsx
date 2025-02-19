import styles from "./SimilarMovies.module.css";
import useFetchMovies from "../../hooks/useFetchMovies";
import PropTypes from "prop-types";

export default function DisplayMovies({ API_KEY, BASE_URL, IMAGE_PATH, genre, detail }) {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=2`;
  const { movies: latestMovies, loading, error } = useFetchMovies(url);

  if (loading) return <div className="spinner">Loading movies</div>;;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
    {loading? (
      <div className={styles.loadingSpinner}>
                <div className={styles.spinner}></div>
              </div>
    ):(
      <div className={styles.carouselSimilar}>
      {latestMovies.map((movie) => (
        <div className={styles.movieCommon} key={movie.id}>
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
    )}
     
    </>
  );
}

DisplayMovies.propTypes = {
    API_KEY: PropTypes.string.isRequired,
    BASE_URL: PropTypes.string.isRequired,
    IMAGE_PATH: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    detail: PropTypes.func
  };