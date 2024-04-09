/* eslint-disable react/prop-types */
import getGenres from "../utils/dataGenre";
const genres = await getGenres();
export default function MoviesCard({ image, title, year, genre_id }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const findGenre = (genreId) => {
    const genre = genres.find((item) => item.id == genreId);
    return genre;
  };
  const genreName = [];
  genre_id.map((v) => {
    genreName.push(findGenre(v));
  });
  return (
    <>
      <div className="bg-slate-800 rounded-lg">
        <a href="#">
          <img src={`${imageUrl}${image}`} alt={title} className="rounded-lg" />
        </a>
        <div className="mx-3 mt-5 mb-3">
          <a href="#" className="font-medium text-lg underline">
            {title}
          </a>
          <p className="mt-2">{year}</p>
          <div className="mt-2">
            <p>
              Genre:<span> </span>
              {genreName.map((v, i) => {
                return (
                  <a href="#" className="underline" key={i}>
                    {v.name},{" "}
                  </a>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
