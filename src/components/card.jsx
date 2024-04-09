/* eslint-disable react/prop-types */
import getGenres from "../utils/dataGenre";
const genres = await getGenres();
export default function MoviesCard({ image, title, year, genre_id }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const findGenre = (arr, genreId) => {
    const genre = arr.find((item) => item.id == genreId);
    return genre;
  };
  return (
    <>
      <div className="bg-slate-800 rounded-lg">
        <a href="#">
          <img src={`${imageUrl}${image}`} alt={title} className="rounded-lg" />
        </a>
        <div className="mx-3 mt-5">
          <a href="#" className="font-medium text-lg underline">
            {title}
          </a>
          <p>{year}</p>
          <div className="flex justify-start">
            <p>Genre: </p>
            {genre_id.map((v, i) => {
              return <p key={i}>{findGenre(genres, v)}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
