import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cast = await getMovieCredits(movieId);
        setCast(cast.cast);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      {cast.length === 0 && <p>Casts not found</p>}
      {cast.length > 0 && (
        <ul>
          {cast.map(({ id, profile_path, character, original_name }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w500${profile_path}`;
            const defaultImageUrl =
              "https://placehold.co/500x800?text=Haven't+Image";

            return (
              <li key={id}>
                <img
                  src={`${profile_path ? imageUrl : defaultImageUrl}`}
                  alt={original_name}
                />
                <h3>
                  Actor: <span>{original_name}</span>
                </h3>
                <p>
                  Character: <span>{character}</span>
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
