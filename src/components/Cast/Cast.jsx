import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieCredits } from 'api/index.js';
import { LoaderComponent } from 'components/Loader';
import { List, Text } from './Cast.styled';

export function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    async function fetchMoviesActors() {
      try {
        setIsLoading(true);
        const actors = await getMovieCredits(movieId);

        setActors(actors);
        setError(null);
      } catch (error) {
        Notify.failure('Oops, something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchMoviesActors();
  }, [movieId]);

  return (
    <>
      {isLoading && <LoaderComponent />}

      <List>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="150px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://crawfordroofing.com.au/wp-content/uploads/2018/04/No-image-available.jpg`
              }
              alt={original_name}
            />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </li>
        ))}
      </List>
      {actors.length === 0 && <div>Sorry, there is no information about the actors.</div>}
    </>
  );
}
