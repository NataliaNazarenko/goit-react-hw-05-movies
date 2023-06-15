import React, { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { TrendingMovies } from 'components/TrendingMovies';
import { getTrendingMovies } from 'api/index.js';
import { LoaderComponent } from 'components/Loader';

export function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const results = await getTrendingMovies();
        setMovies(results);
        setError(null);
      } catch (error) {
        Notify.failure('Oops, something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <TrendingMovies movies={movies} />

      {isLoading && <LoaderComponent />}
    </>
  );
}
