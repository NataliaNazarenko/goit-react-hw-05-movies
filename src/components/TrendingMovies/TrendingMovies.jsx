import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MoviesList, MoviesItem, Link } from './TrendingMovies.styled';

export const TrendingMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <MoviesList>
        {movies.map(movie => (
          <MoviesItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </MoviesItem>
        ))}
      </MoviesList>
    </>
  );
};

TrendingMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
