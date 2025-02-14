import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<MoviePage />}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App
