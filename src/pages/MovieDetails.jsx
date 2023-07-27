import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { routes } from 'routes';
import { getMovieDetails } from 'service/api';
import { Button, Section } from './MovieDetails.styled';
import { MovieCard, Loader } from 'components';

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
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          {isLoading && <Loader />}
        </Container>
      </Section>
    </main>
  );
};
