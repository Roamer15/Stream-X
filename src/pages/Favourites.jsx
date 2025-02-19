import { useEffect, useState } from 'react';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Favourites() {
    const [favouriteMovies, setFavouriteMovies] = useState(
        JSON.parse(localStorage.getItem('watchlist')) || []
    );

    useEffect(() => {
        setFavouriteMovies(JSON.parse(localStorage.getItem('watchlist')) || []);
    }, []);

    const removeFromFavourites = (id) => {
        const updatedList = favouriteMovies.filter(movie => movie.id !== id);
        setFavouriteMovies(updatedList);
        localStorage.setItem('watchlist', JSON.stringify(updatedList));
    };

    return (
        <>
            <div className="favourites-container">
            <Navbar />
            <h1>Your Favourite Movies</h1>
            {favouriteMovies.length === 0 ? (
                <p>No favourite movies yet. Add some!</p>
            ) : (
                <div className="movies-grid">
                    {favouriteMovies.map(movie => (
                        <div key={movie.id} className="movie-card">
                            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "fallback_image_url"} 
                                 alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <button onClick={() => removeFromFavourites(movie.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
        <Footer/>
        </>
    
    );
}
