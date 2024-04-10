import { useState, useEffect } from "react";
import MoviesList from "./components/list";
import Loading from "./components/loading";
import getMovies from "./utils/datafilm";
import Footer from "./components/footer";
import searchMovies from "./utils/searchMovies";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchReturn, setSearchReturn] = useState([]);
  const [loading, setLoading] = useState(false); // State untuk menampilkan loading

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Tampilkan loading saat mulai fetching data
      const data = await getMovies();
      setMoviesList(data);
      setLoading(false); // Sembunyikan loading setelah selesai fetching data
    };
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const toSearch = async () => {
    if (search.length !== 0) {
      setLoading(true); // Tampilkan loading saat mulai pencarian
      const res = await searchMovies(search);
      setSearchReturn(res);
      setLoading(false); // Sembunyikan loading setelah selesai pencarian
    }
  };

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
            onChange={handleInputChange}
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
          {loading ? ( // Tampilkan loading jika loading true
            <Loading />
          ) : searchReturn.length !== 0 ? (
            <MoviesList moviesList={searchReturn} />
          ) : (
            <MoviesList moviesList={moviesList} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
