import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { routes } from 'routes';
import { getMovieDetails } from 'service/api';
import { MovieCard, Loader } from 'components';
import { Section } from 'styles/Common.styled';
import { Button, SubTitle, Ul, LinkStyled } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  const goBackLink = location?.state?.from ?? routes.HOME;

  return (
    <main>
      <Section>
        <Container>
          <Button to={goBackLink}>Go Back</Button>
          {movie && <MovieCard movie={movie} />}
          <SubTitle>Additional information</SubTitle>
          <Ul>
            <li>
              <LinkStyled to="cast">Cast</LinkStyled>
            </li>
            <li>
              <LinkStyled to="reviews">Reviews</LinkStyled>
            </li>
          </Ul>
          {isLoading && <Loader />}
        </Container>
      </Section>
    </main>
  );
};
