import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ol>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`${routes.MOVIES}/${id}`}>
            {title || name}
          </Link>
        </li>
      ))}
    </ol>
  );
};
