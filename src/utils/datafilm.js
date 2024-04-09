import axios from "axios";

const options = {
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmEwN2MxODdmOTExZDEyMjVjOGFjNDk0Y2E2NzJmZCIsInN1YiI6IjY2MTQyM2NhOGVlMGE5MDE3ZWE0NWU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4W8_-e92UPTvrQt6CcWp0LVYWCt7Dc6SeEc3KN7-bA",
  },
};

const getMovies = async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    options
  );
  const mov = res.data.results;
  return mov;
};

export default getMovies;
