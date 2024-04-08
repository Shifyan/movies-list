// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import MoviesList from "./components/list";
function App() {
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
          <MoviesList />
        </div>
      </div>
    </>
  );
}

export default App;
