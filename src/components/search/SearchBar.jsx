import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { DetailMovieContext } from "../../context/MovieContext";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([]);
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_BASE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_BASE_URL;
  const IMAGE_PATH = import.meta.env.VITE_BASE_IMG_PATH;
  const { setSelectedMovie } = useContext(DetailMovieContext);

  const handleQuery = async (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm.length > 1) {
      const response = await fetch(
        `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchTerm}`
      )
      const data =await response.json()
      setSearchedMovie(data.results)
    }
    else {
        setSearchedMovie([])
    }
  };

  const handleMovieDetail = (movie) => {
    setSelectedMovie(movie)
    navigate(`/details/${movie.id}`)
  }

  return (
    <div className={styles.input}>
      <input
        type="search"
        placeholder="Search Movies, Series.."
        value={query}
        onChange={handleQuery}
      />
      
      <svg
      className={styles.searchIcon}
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8.65071C0 9.72128 0.201823 10.7253 0.605469 11.6629C1.00912 12.6005 1.56901 13.4261 2.28516 14.1398C3.00131 14.8535 3.82976 15.4115 4.77051 15.8138C5.71126 16.216 6.71875 16.4171 7.79297 16.4171C8.63932 16.4171 9.4466 16.2874 10.2148 16.0278C10.9831 15.7683 11.6862 15.4115 12.3242 14.9573L17.1289 19.7553C17.2461 19.8657 17.3747 19.9484 17.5146 20.0036C17.6546 20.0587 17.8027 20.0863 17.959 20.0863C18.1803 20.0863 18.3756 20.036 18.5449 19.9354C18.7142 19.8348 18.846 19.6969 18.9404 19.5218C19.0348 19.3466 19.082 19.1519 19.082 18.9378C19.082 18.7821 19.0543 18.6362 18.999 18.4999C18.9437 18.3636 18.8639 18.2436 18.7598 18.1398L13.9844 13.3515C14.4857 12.7026 14.8779 11.9792 15.1611 11.1811C15.4443 10.3831 15.5859 9.53961 15.5859 8.65071C15.5859 7.58015 15.3841 6.5761 14.9805 5.63855C14.5768 4.701 14.0169 3.87537 13.3008 3.16166C12.5847 2.44795 11.7562 1.88996 10.8154 1.48768C9.87467 1.08541 8.86719 0.884277 7.79297 0.884277C6.71875 0.884277 5.71126 1.08541 4.77051 1.48768C3.82976 1.88996 3.00131 2.44795 2.28516 3.16166C1.56901 3.87537 1.00912 4.701 0.605469 5.63855C0.201823 6.5761 0 7.58015 0 8.65071ZM1.66992 8.65071C1.66992 7.80724 1.8278 7.0173 2.14355 6.28088C2.45931 5.54446 2.89876 4.89564 3.46191 4.3344C4.02506 3.77317 4.67611 3.33521 5.41504 3.02053C6.15397 2.70585 6.94662 2.54851 7.79297 2.54851C8.63932 2.54851 9.43197 2.70585 10.1709 3.02053C10.9098 3.33521 11.5592 3.77317 12.1191 4.3344C12.679 4.89564 13.1185 5.54446 13.4375 6.28088C13.7565 7.0173 13.916 7.80724 13.916 8.65071C13.916 9.49419 13.7565 10.2841 13.4375 11.0205C13.1185 11.757 12.679 12.4042 12.1191 12.9621C11.5592 13.5201 10.9098 13.9581 10.1709 14.276C9.43197 14.5939 8.63932 14.7529 7.79297 14.7529C6.94662 14.7529 6.15397 14.5939 5.41504 14.276C4.67611 13.9581 4.02506 13.5201 3.46191 12.9621C2.89876 12.4042 2.45931 11.757 2.14355 11.0205C1.8278 10.2841 1.66992 9.49419 1.66992 8.65071Z"
          fill="white"
          fillOpacity="0.6"
        />
      </svg>
      {searchedMovie.length > 0 && (
        <div className="search-results">
          {searchedMovie.map((movie) => (
            <div
              key={movie.id}
              className="search-item"
            >
              <img
                src={`${IMAGE_PATH}${movie.poster_path}`}
                alt={movie.title}
                onClick={() => handleMovieDetail(movie)}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
