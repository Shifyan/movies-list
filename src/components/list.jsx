/* eslint-disable react/prop-types */
import MoviesCard from "./card";

export default function MoviesList({ moviesList }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-5 my-20">
        {moviesList.map((v, i) => {
          return (
            <MoviesCard
              key={i}
              image={v.poster_path}
              title={v.title}
              year={v.release_date}
              genre_id={v.genre_ids}
            />
          );
        })}
      </div>
    </>
  );
}
