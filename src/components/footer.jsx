export default function Footer() {
  return (
    <>
      <div className=" mt-10 items-center  bg-slate-500 rounded-t text-white text-md font-medium">
        <div className="py-2">
          <div className="flex justify-center">
            <h1>
              Dev by{" "}
              <a
                href="https://www.instagram.com/a.shif_yan/"
                className="underline"
              >
                Shifyan Almustafid
              </a>
            </h1>
          </div>
          <div className="flex justify-center">
            <h1>
              Movies API by{" "}
              <a
                href="https://developer.themoviedb.org/docs/getting-started"
                className="underline"
              >
                The Movie Database (TMDB) API
              </a>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
