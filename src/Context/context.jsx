import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DetailMovieContext = createContext()

export const DetailMovieData = ({children}) => {

    const [selectedMovie, setSelectedMovie] = useState(null)

    return (
        <DetailMovieContext.Provider value={{selectedMovie, setSelectedMovie}}>
            {children}
        </DetailMovieContext.Provider>
    )
}

DetailMovieData.propTypes = {
    children: PropTypes.node
}