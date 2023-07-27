import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home, MovieDetails, Movies } from 'pages';
import { routes } from 'routes';
import { Cast } from './Cast/Cast';
import { Review } from './Review/Review';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<Movies />} />
          <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} replace />} />
      </Routes>
    </>
  );
};
