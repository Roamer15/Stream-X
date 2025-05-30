import styles from "./DisplayMovies.module.css";
import useFetchMovies from "../../hooks/useFetchMovies";
import PropTypes from "prop-types";

export default function DisplayMovies({
  API_KEY,
  BASE_URL,
  IMAGE_PATH,
  title,
  genre,
  detail,
}) {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}`;
  const { movies: displayMovies, loading, error } = useFetchMovies(url);

  if (loading)
    return (
      <div className={styles.common}>
        <div className="spinner"></div>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;
console.log(displayMovies)
  return (
    <>
      <div className={styles.headerCarousel}>
        <h1>{title}</h1>
        <button className={styles.nextMovie}>
          View More
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.230252 10.7697C0.0828219 10.6223 0 10.4223 0 10.2138C0 10.0052 0.0828219 9.80523 0.230252 9.65775L4.39276 5.49525L0.230252 1.33275C0.0870001 1.18443 0.00773378 0.985779 0.00952556 0.779583C0.0113173 0.573387 0.0940238 0.376144 0.239832 0.230336C0.38564 0.0845283 0.582883 0.00182152 0.789079 2.97285e-05C0.995275 -0.00176206 1.19393 0.0775046 1.34224 0.220757L6.06074 4.93926C6.20818 5.08673 6.291 5.28672 6.291 5.49525C6.291 5.70378 6.20818 5.90377 6.06074 6.05125L1.34224 10.7697C1.19477 10.9172 0.994778 11 0.786249 11C0.577719 11 0.377727 10.9172 0.230252 10.7697Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className={styles.carouselCommon}>
        {displayMovies.map((movie) => (
          <div className={styles.movieCommon} key={movie.id}>
            <img
              src={
                movie.backdrop_path ? (
                  `${IMAGE_PATH}${movie.backdrop_path}`
                ) : (
                  `${IMAGE_PATH}${movie.poster_path}`
                )
              }
              alt={movie.title}
              onClick={() => detail(movie)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

DisplayMovies.propTypes = {
  API_KEY: PropTypes.string.isRequired,
  BASE_URL: PropTypes.string.isRequired,
  IMAGE_PATH: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  detail: PropTypes.func,
};
