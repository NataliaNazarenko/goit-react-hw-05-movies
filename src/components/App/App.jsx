import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../../layout/Layout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() =>
  import('components/Cast').then(module => ({ ...module, default: module.Cast }))
);
const Reviews = lazy(() =>
  import('components/Reviews').then(module => ({ ...module, default: module.Reviews }))
);

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Route>
    </Routes>
  );
}
