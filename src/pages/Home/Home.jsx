import { useState, useEffect } from 'react';

import { MoviesList, PageTitle } from 'components';
import { TMDBAPI } from 'js/API/TMDBAPI';

import { Container } from 'components';

const Home = () => {
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    (async () => {
      const moviesResponse = await TMDBAPI.getTrendingMovies();
      setMoviesData(moviesResponse);
    })();

    document.title = 'Home';
  }, []);

  return (
    <main>
      <Container>
        <PageTitle title="Trending Today" size="34px" />
        {moviesData && <MoviesList moviesData={moviesData} />}
      </Container>
    </main>
  );
};

export default Home;
