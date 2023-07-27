import { Container } from '@mui/material';
import { Loader, MoviesList, SearchForm } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'service/api';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get('query') || '';
    if (queryParam) {
      fetchData(queryParam);
    } else {
      setMovies([]);
    }
  }, [searchParams]);

  const fetchData = async queryParam => {
    setIsLoading(true);

    try {
      const data = await getSearchMovie(queryParam);
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = queryParam => {
    setQuery(queryParam);
    setSearchParams({ query: queryParam });
  };

  return (
    <main>
      <Container>
        <SearchForm onSubmit={handleFormSubmit} />
        {query && movies.length === 0 && <p>No movies found.</p>}
        {movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading && <Loader />}
      </Container>
    </main>
  );
};
