import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/api';
import { Image, Li, Text, TextWrap, Title, Ul } from './Cast.styled';

const Cast = () => {
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
        <Ul>
          {cast.map(({ id, profile_path, character, original_name }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w500${profile_path}`;
            const defaultImageUrl =
              "https://placehold.co/500x800?text=Haven't+Image";

            return (
              <Li key={id}>
                <Image
                  loading="lazy"
                  src={`${profile_path ? imageUrl : defaultImageUrl}`}
                  alt={original_name}
                />
                <TextWrap>
                  <Title>{original_name}</Title>
                  <Text>
                    Character: <span>{character}</span>
                  </Text>
                </TextWrap>
              </Li>
            );
          })}
        </Ul>
      )}
    </>
  );
};

export default Cast;
