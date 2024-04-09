/* eslint-disable no-unused-vars */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState, useEffect } from "react";
import MoviesList from "./components/list";
import getMovies from "./utils/datafilm";
import Footer from "./components/footer";
import searchMovies from "./utils/searchMovies";

const myMovies = await getMovies();
function App() {
  const [moviesList, setMoviesList] = useState(myMovies);
  const [search, setSearch] = useState("");
  const [searchReturn, setSearchReturn] = useState([]);
  function handleInputeChange(event) {
    setSearch(event.target.value);
  }

  const toSearch = async () => {
    if (search.length !== 0) {
      const hasilSearch = await searchMovies(search);
      console.log(hasilSearch);
    }
  };
  // console.log(search);
  return (
    <>
      <div className="m-5 p-5 bg-slate-700 rounded-md text-white">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">My Movies List</h1>
        </div>
        <div className="flex justify-center my-8">
          <input
            type="text"
            className="text-black p-2 mx-5 rounded w-[30rem]"
            value={search}
            onChange={handleInputeChange}
            required
          />
          <button
            onClick={toSearch}
            className="py-2 px-3 bg-white hover:bg-slate-400 ease transition-colors duration-500 rounded text-black"
          >
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
