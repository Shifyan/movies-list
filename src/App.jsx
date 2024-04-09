/* eslint-disable no-unused-vars */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState, useEffect } from "react";
import MoviesList from "./components/list";
import getMovies from "./utils/datafilm";
import getGenres from "./utils/dataGenre";
import Footer from "./components/footer";
const genres = await getGenres();
const myMovies = await getMovies();
console.log(genres);
function App() {
  const [moviesList, setMoviesList] = useState(myMovies);
  return (
    <>
      <div className="m-5 p-5 bg-slate-700 rounded-md text-white">
        <h1 className="text-4xl font-bold">My Movies List</h1>
        <div className="flex justify-center my-8">
          <input
            type="text"
            className="text-black p-2 mx-5 rounded w-[30rem]"
          />
          <button className="py-2 px-3 bg-white hover:bg-slate-400 ease transition-colors duration-500 rounded text-black">
            Search!
          </button>
        </div>
        <div>
          <MoviesList moviesList={moviesList} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
