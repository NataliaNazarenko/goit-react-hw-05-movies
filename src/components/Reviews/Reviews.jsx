import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieReviews } from 'api/index.js';
import { LoaderComponent } from 'components/Loader';
import { Wrapper, ListReviews, DetailsItem, AuthorName, InfoContent } from './Reviews.styled';

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
        <Wrapper>
          <ListReviews>
            {reviews.map(review => (
              <DetailsItem key={review.id}>
                <AuthorName>Author: {review.author}</AuthorName>
                <InfoContent>{review.content}</InfoContent>
              </DetailsItem>
            ))}
          </ListReviews>
        </Wrapper>
      )}
      {reviews.length === 0 && <div>We don't have any reviews for this movie.</div>}
    </>
  );
}
