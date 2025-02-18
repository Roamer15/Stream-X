import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import Favourites from './pages/Favourites'
import { DetailMovieData } from "./Context/context";

function App() {
  return (
    <DetailMovieData>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<MoviePage />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </DetailMovieData>
  );
}

export default App;
