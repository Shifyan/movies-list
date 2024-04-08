import MoviesCard from "./card";

export default function MoviesList() {
  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
    </>
  );
}
