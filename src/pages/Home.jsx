import { Container } from '@mui/material';
import { Loader, MoviesList } from 'components';
import { useEffect, useState } from 'react';
import { getTrendsMovie } from 'service/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getTrendsMovie();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Container>
        <h1>Trending Today</h1>
        <MoviesList movies={movies} />
        {isLoading && <Loader />}
      </Container>
    </main>
  );
};
