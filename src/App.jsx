import { useState, useEffect } from "react";
import MoviesList from "./components/list";
import Loading from "./components/loading";
import getMovies from "./utils/datafilm";
import Footer from "./components/footer";
import searchMovies from "./utils/searchMovies";

const kataDilarang = ["porn", "sex", "nude", "kill"];

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchReturn, setSearchReturn] = useState([]);
  const [loading, setLoading] = useState(false);
  const [myErrors, setMyErrors] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setMyErrors("");
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
    setMyErrors("");
    if (search.length !== 0) {
      const kataDitemukan = kataDilarang.filter((kata) =>
        search.includes(kata)
      );
      if (kataDitemukan.length > 0) {
        alert("Terdapat Kata yang Dilarang!");
        return;
      }
      setLoading(true);
      const res = await searchMovies(search);
      if (res.length === 0) {
        setMyErrors("Film Tidak Ditemukan!");
        return;
      }
      setSearchReturn(res);
      setLoading(false);
      return;
    }
  };

  const toGetMovie = () => {
    setLoading(true); // Tampilkan loading saat mulai pencarian
    setSearchReturn([]);
    setTimeout(() => {
      setLoading(false); // Sembunyikan loading setelah jeda
    }, 500);
  };

  return (
    <>
      <div className="m-5 p-5 bg-slate-700 rounded-md text-white">
        <div className="flex justify-center">
          <button
            onClick={toGetMovie}
            className="text-2xl md:text-4xl font-bold"
          >
            My Movies List
          </button>
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
        {myErrors == "" ? (
          <div>
            {loading ? ( // Tampilkan loading jika loading true
              <Loading />
            ) : searchReturn.length !== 0 ? (
              <MoviesList moviesList={searchReturn} />
            ) : (
              <MoviesList moviesList={moviesList} />
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center my-20">
            <h1 className="font-medium text-xl">{myErrors}</h1>
          </div>
        )}
      </div>
      {loading ? (
        <div></div>
      ) : (
        <div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
