import { createContext, useState, useRef } from "react";
import PropTypes from "prop-types";

export const DetailMovieContext = createContext()

export const DetailMovieData = ({children}) => {

    const [selectedMovie, setSelectedMovie] = useState(null)
    const carouselRef = useRef(null); // Step 1: Reference the carousel

  const scrollNext = () => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust based on movie card width
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }

    return (
        <DetailMovieContext.Provider value={{selectedMovie, setSelectedMovie, scrollNext, carouselRef}}>
            {children}
        </DetailMovieContext.Provider>
    )
}

DetailMovieData.propTypes = {
    children: PropTypes.node
}