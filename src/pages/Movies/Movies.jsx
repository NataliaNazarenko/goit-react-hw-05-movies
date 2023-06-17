import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getSearchMoviesByQuery } from 'api/index.js';
import { LoaderComponent } from 'components/Loader';
import { TrendingMovies } from 'components/TrendingMovies';
import { SearchBar } from 'components/Searchbar';

export default function Movies() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    async function SearchMovies() {
      try {
        setIsLoading(true);
        const results = await getSearchMoviesByQuery(searchQuery);

        setSearchMovies(results);
        setError(null);
      } catch (error) {
        Notify.failure('Oops, something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    SearchMovies();
  }, [searchQuery]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchBar value={searchQuery} onChange={updateQueryString} />
      {isLoading && <LoaderComponent />}

      {searchMovies && <TrendingMovies movies={searchMovies} />}
    </>
  );
}
