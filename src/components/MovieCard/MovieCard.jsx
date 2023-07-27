export const MovieCard = ({ movie }) => {
  const { poster_path, original_title, title, overview, genres, vote_average } =
    movie;

  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const defaultImageUrl = "https://placehold.co/500x800?text=Haven't+Image";
  const genreNames =
    genres.length === 1
      ? genres[0].name
      : genres.map(genre => genre.name).join(', ');

  return (
    <>
      <div>
        <img
          loading="lazy"
          width={500}
          src={poster_path ? imageUrl : defaultImageUrl}
          alt={title ? title : original_title}
        />
        <div>
          <h1>{title ? title : original_title}</h1>
          <p>
            User score: <span>{Math.round(vote_average * 10)}%</span>
          </p>
          <h2>Overview</h2>
          <p>{overview ? overview : "Haven't overview"}</p>

          <h3>Genres</h3>
          <p>{genreNames}</p>
        </div>
      </div>
    </>
  );
};
