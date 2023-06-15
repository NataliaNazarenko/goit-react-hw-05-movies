import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieReviews } from 'api/index.js';
import { LoaderComponent } from 'components/Loader';
import { List } from './Reviews.styled';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    async function fetchMoviesReviews() {
      try {
        setIsLoading(true);
        const reviews = await getMovieReviews(movieId);

        setReviews(reviews);
        setError(null);
      } catch (error) {
        Notify.failure('Oops, something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchMoviesReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <LoaderComponent />}
      {reviews.length !== 0 && (
        <div>
          <List>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </List>
        </div>
      )}
      {reviews.length === 0 && <div>We don't have any reviews for this movie.</div>}
    </>
  );
}
