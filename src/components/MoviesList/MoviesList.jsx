import { useLocation } from 'react-router-dom';
import { routes } from 'routes';
import { Ol, Li, LinkStyled } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Ol>
      {movies.map(({ id, title, name }) => (
        <Li key={id}>
          <LinkStyled state={{ from: location }} to={`${routes.MOVIES}/${id}`}>
            {title || name}
          </LinkStyled>
        </Li>
      ))}
    </Ol>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
