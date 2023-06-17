import { useEffect, useState, Suspense, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { BackLink } from 'components/ui/BackLink';
import { getMovieDetails } from 'api/index.js';
import { LoaderComponent } from 'components/Loader';
import {
  Link,
  DetailsInfo,
  DetailsItem,
  GenresList,
  GenresItem,
  MovieContainer,
  MovieImage,
  MovieDetailsContainer,
  MovieTitle,
  MovieUserScore,
  MovieOverview,
  GenresContainer,
  AdditionalInfoContainer,
  AdditionalInfoTitle,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const locationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function fetchMoviesDetails() {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(movieId);

        setMovieDetails(data);
      } catch (error) {
        Notify.failure('Oops, something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchMoviesDetails();
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const { title, release_date, popularity, overview, genres, poster_path, original_title } =
    movieDetails;

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {isLoading && <LoaderComponent />}
      {{ title, release_date, popularity, overview, genres, poster_path, original_title } && (
        <MovieContainer>
          <MovieImage
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://crawfordroofing.com.au/wp-content/uploads/2018/04/No-image-available.jpg`
            }
            alt={original_title}
          />
          <MovieDetailsContainer>
            <MovieTitle>
              {title} ({release_date && release_date.slice(0, 4)})
            </MovieTitle>
            <MovieUserScore>User score: {popularity}</MovieUserScore>
            <h2>Overview</h2>
            <MovieOverview>{overview}</MovieOverview>
            <h2>Genres</h2>
            {genres && genres.length > 0 && (
              <GenresContainer>
                <GenresList>
                  {genres.map(genre => (
                    <GenresItem key={genre.id}>{genre.name}</GenresItem>
                  ))}
                </GenresList>
              </GenresContainer>
            )}
          </MovieDetailsContainer>
        </MovieContainer>
      )}

      <AdditionalInfoContainer>
        <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
        <DetailsInfo>
          <DetailsItem>
            <Link to="cast" state={{ from: locationRef.current }}>
              Cast
            </Link>
          </DetailsItem>
          <DetailsItem>
            <Link to="reviews" state={{ from: locationRef.current }}>
              Reviews
            </Link>
          </DetailsItem>
        </DetailsInfo>

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </AdditionalInfoContainer>
    </>
  );
}
