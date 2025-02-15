import styles from "./DisplayMovies.module.css";
import useFetchMovies from "../../hooks/useFetchMovies";
import PropTypes from "prop-types";

export default function DisplayMovies({ API_KEY, BASE_URL, IMAGE_PATH, title, genre }) {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}`;
  console.log(url)
  const { movies: latestMovies, loading, error } = useFetchMovies(url);


  

  if (loading) return <p>Loading popular movies...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>{title}</h1>
      <div className={styles.carouselCommon}>
        {latestMovies.map((movie) => (
          <div className={styles.movieCommon} key={movie.id}>
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

DisplayMovies.propTypes = {
    API_KEY: PropTypes.string.isRequired,
    BASE_URL: PropTypes.string.isRequired,
    IMAGE_PATH: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  };