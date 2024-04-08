// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from "react";
import MoviesList from "./components/list";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmEwN2MxODdmOTExZDEyMjVjOGFjNDk0Y2E2NzJmZCIsInN1YiI6IjY2MTQyM2NhOGVlMGE5MDE3ZWE0NWU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4W8_-e92UPTvrQt6CcWp0LVYWCt7Dc6SeEc3KN7-bA",
  },
};

const res = await fetch(
  "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
  options
).then((response) => response.json());
let dataFilm = res.results;
function App() {
  // const [list,setList] = useState(listMovie)
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
          <MoviesList data={dataFilm} />
          <ol>
            {dataFilm.map((e, i) => {
              return <li key={i}>{e.original_title}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
