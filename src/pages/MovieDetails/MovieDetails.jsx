import { Container } from '@mui/material';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { routes } from 'routes';
import { getMovieDetails } from 'service/api';
import { MovieCard, Loader } from 'components';
import { Section } from 'styles/Common.styled';
import { Button, SubTitle, Ul, LinkStyled } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
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
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  const goBackLink = useRef(location?.state?.from ?? routes.HOME);

  return (
    <main>
      <Section>
        <Container>
          <Button to={goBackLink.current}>Go Back</Button>
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
          {error && <p>Oops... Something went wrong...</p>}
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Section>
    </main>
  );
};

export default MovieDetails;
