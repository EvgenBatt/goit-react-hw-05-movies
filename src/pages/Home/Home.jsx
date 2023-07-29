import { Container } from '@mui/material';
import { Loader, MoviesList } from 'components';
import { useEffect, useState } from 'react';
import { getTrendsMovie } from 'service/api';
import { Section } from 'styles/Common.styled';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getTrendsMovie();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <Title>Trending Today</Title>
          {movies && <MoviesList movies={movies} />}
          {isLoading && <Loader />}
          {error && <p>Oops... Something went wrong...</p>}
        </Container>
      </Section>
    </main>
  );
};

export default Home;
