import { DetailMovieContext } from "../Context/context";
import { useParams } from "react-router";
import { useContext, useState, useEffect } from "react";
import Cast from "../components/cast/Cast";
import Hero from "../components/hero/Hero";
import SimilarMovies from "../components/similar/SimilarMovies";
import { useNavigate } from "react-router";
import Footer from '../components/footer/Footer'

const API_KEY = import.meta.env.VITE_BASE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const MoviePage = () => {
  const { selectedMovie } = useContext(DetailMovieContext);
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  const apiKey = import.meta.env.VITE_BASE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_BASE_URL;
  const IMAGE_PATH = import.meta.env.VITE_BASE_IMG_PATH;

  const { setSelectedMovie } = useContext(DetailMovieContext)
  const navigate = useNavigate()

  const handleMovieDetail = (movie) => {
    console.log(movie)
    setSelectedMovie(movie)
    navigate(`/details/${movie.id}`)
  }

  // Fetch Cast Data
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
        );
        const data = await response.json();
        setCast(data.cast.slice(0, 5)); // Get the top 5 cast members
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };

    fetchCast();
  }, [id]);

  if (!selectedMovie || selectedMovie.id !== parseInt(id)) {
    return <h2>Movie not found. Please go back and select a movie.</h2>;
  }

  return (
    <>
      <Hero
        backgroundImage={selectedMovie.poster_path}
        description={selectedMovie.overview}
        title={selectedMovie.title}
      />
      <Cast cast={cast} />

      <h1 className="h1-detail">More Like this</h1>

      <SimilarMovies
        API_KEY={apiKey}
        BASE_URL={baseUrl}
        IMAGE_PATH={IMAGE_PATH}
        genre={selectedMovie.genre_ids[0]}
        detail={handleMovieDetail}
      />

      <SimilarMovies
        API_KEY={apiKey}
        BASE_URL={baseUrl}
        IMAGE_PATH={IMAGE_PATH}
        genre={selectedMovie.genre_ids[1]}
        detail={handleMovieDetail}
      />

      <Footer />
    </>
  );
};

export default MoviePage;
