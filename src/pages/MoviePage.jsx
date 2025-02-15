import { DetailMovieContext } from "../Context/context";
import { useParams } from "react-router";

const MoviePage = () => {
  const { selectedMovie } = DetailMovieContext();
  const { id } = useParams();

  if (!selectedMovie || selectedMovie.id !== parseInt(id)) {
    return <h2>Movie not found. Please go back and select a movie.</h2>;
  }

  return (
    <div className="movie-details">
      <div
        className="banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.poster_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      />
      <h1>{selectedMovie.title}</h1>
      <p>{selectedMovie.overview}</p>
    </div>
  );
};

export default MoviePage;
