import { CardWrap, Img, TextWrap } from './MovieCard.styled';
import PropTypes from 'prop-types';

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
      <CardWrap>
        <Img
          loading="lazy"
          width={500}
          src={poster_path ? imageUrl : defaultImageUrl}
          alt={title ? title : original_title}
        />
        <div>
          <TextWrap>
            <h1>{title ? title : original_title}</h1>
            <p>
              User score: <span>{Math.round(vote_average * 10)}%</span>
            </p>
          </TextWrap>

          <TextWrap>
            <h2>Overview</h2>
            <p>{overview ? overview : "Haven't overview"}</p>
          </TextWrap>

          <TextWrap>
            <h3>Genres</h3>
            <p>{genreNames}</p>
          </TextWrap>
        </div>
      </CardWrap>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    vote_average: PropTypes.number,
  }).isRequired,
};
