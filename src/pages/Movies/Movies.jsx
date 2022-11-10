import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MoviesList, SearchForm, PageTitle, Container } from 'components';
import { SearchWrapper } from './Movies.styled';
import { TMDBAPI } from 'js/API/TMDBAPI';

const Movies = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('search')) {
      return;
    }

    (async () => {
      const moviesResponse = await TMDBAPI.getMoviesBySearch(
        searchParams.get('search')
      );

      setMoviesData(moviesResponse);
    })();
  }, [searchParams]);

  useEffect(() => {
    document.title = 'Movies';
  });

  const onSearchFormSubmit = newSearchQuery => {
    setSearchParams({ search: newSearchQuery });
  };

  return (
    <main>
      <Container>
        <PageTitle title="Search for movies" size="34px" />
        <SearchWrapper>
          <SearchForm onSubmit={onSearchFormSubmit} />
          {moviesData && <MoviesList moviesData={moviesData} />}
        </SearchWrapper>
      </Container>
    </main>
  );
};

export default Movies;
