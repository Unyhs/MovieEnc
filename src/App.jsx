import './App.css'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Watchlist from './Components/Watchlist'
import TopTen from './Components/TopTen'
import MovieContextWrapper from "../src/context/MovieContext"
import Loader from './Components/Loader'

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

          <Route
          path='/topten'
          element={<TopTen />}
          >
          </Route>

          <Route
          path='/loader'
          element={<Loader />}
          >
          </Route>
        </Routes>
      </MovieContextWrapper>
    </>
  );
}

export default App
