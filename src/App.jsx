import './App.css'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Watchlist from './Components/Watchlist'
import MovieContextWrapper from "../src/context/MovieContext"

function App() {

  return (
    <>
      <MovieContextWrapper>
        <Navbar />
        <Routes>
          <Route
          path='/'
          element={<Home />}>
          </Route>

          <Route
          path='/watchlist'
          element={<Watchlist />}>
          </Route>
        </Routes>
      </MovieContextWrapper>
    </>
  );
}

export default App
