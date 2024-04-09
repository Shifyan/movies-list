import axios from "axios";
function searchMovies(myQuery) {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: { query: myQuery, include_adult: "false", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmEwN2MxODdmOTExZDEyMjVjOGFjNDk0Y2E2NzJmZCIsInN1YiI6IjY2MTQyM2NhOGVlMGE5MDE3ZWE0NWU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4W8_-e92UPTvrQt6CcWp0LVYWCt7Dc6SeEc3KN7-bA",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const res = response.data.results;
      console.log(res);
    })
    .catch(function (error) {
      console.error(error);
    });
}
const tiger = searchMovies("tiger");
console.log(tiger);
export default searchMovies;
