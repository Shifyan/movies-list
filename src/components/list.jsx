/* eslint-disable react/prop-types */
import MoviesCard from "./card";

export default function MoviesList({ data }) {
  console.log(data);
  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <ol>
          {data.map((e, i) => {
            return <li key={i}>{e.original_title}</li>;
          })}
        </ol>
      </div>
    </>
  );
}
