/* eslint-disable react/prop-types */
import getGenres from "../utils/dataGenre";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
const genres = await getGenres();
export default function MoviesCard({ image, title, year, genre_id }) {
  // Image Url
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  // Function to Find Movie Genre
  const findGenre = (genreId) => {
    const genre = genres.find((item) => item.id == genreId);
    return genre;
  };

  // Make Movie Genre to Array
  const genreName = [];
  genre_id.map((v) => {
    genreName.push(findGenre(v));
  });

  // Mengubah format tanggal
  let tanggal;
  if (year !== "") {
    tanggal = format(parseISO(year), "dd MMMM yyyy", {
      locale: id,
    });
  } else if (year === "") {
    tanggal = "Tanggal Rilis Tidak Ditemukan";
  }

  return (
    <>
      <div className="bg-slate-800 rounded-lg">
        <div className="overflow-hidden rounded-lg">
          <a href="#">
            <img
              src={`${imageUrl}${image}`}
              alt={title}
              className="rounded-lg hover:scale-110 duration-500 ease-in-out object-cover"
            />
          </a>
        </div>
        <div className="mx-3 mt-5 mb-3">
          <div className="flex justify-center text-center my-5">
            <a href="#" className="font-medium text-xl underline">
              {title}
            </a>
          </div>
          <p>
            <span className="font-medium">Rilis: </span>
            {tanggal}
          </p>
          <div className="mt-2">
            <p>
              <span className="font-medium">Genre: </span>
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
