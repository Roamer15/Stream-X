import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DetailMovieContext = createContext()

export const DetailMovieData = ({children}) => {

    const [selectedMovie, setSelectedMovie] = useState(null)
    const apiKey = import.meta.env.VITE_BASE_API_KEY;
    const baseUrl = import.meta.env.VITE_BASE_BASE_URL;
    const IMAGE_PATH = import.meta.env.VITE_BASE_IMG_PATH;

    return (
        <DetailMovieContext.Provider value={{selectedMovie, setSelectedMovie, apiKey, baseUrl, IMAGE_PATH}}>
            {children}
        </DetailMovieContext.Provider>
    )
}

DetailMovieData.propTypes = {
    children: PropTypes.node
}