// const API_KEY = import.meta.env.VITE_BASE_API_KEY
// const BASE_URL = import.meta.env.VITE_BASE_BASE_URL
// const IMAGE_PATH = import.meta.env.VITE_BASE_IMG_PATH

export const fetchMovies = async(URL) => {
    try {
        console.log(URL)
        const response = await fetch(URL)
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data =  await response.json()
        console.log(data.results)
        return data.results
    }
    catch(error) {
        console.error('Error fetching movies', error)
    }
}

export default fetchMovies