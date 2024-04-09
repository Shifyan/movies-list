import axios from "axios";

const optionsGenre = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmEwN2MxODdmOTExZDEyMjVjOGFjNDk0Y2E2NzJmZCIsInN1YiI6IjY2MTQyM2NhOGVlMGE5MDE3ZWE0NWU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4W8_-e92UPTvrQt6CcWp0LVYWCt7Dc6SeEc3KN7-bA",
  },
};
const getGenres = async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list",
    optionsGenre
  );
  const genre = res.data.genres;
  return genre;
};
export default getGenres;
