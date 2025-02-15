import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import { DetailMovieData } from "./Context/context";

function App() {
  return (
    <DetailMovieData>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </DetailMovieData>
  );
}

export default App;
