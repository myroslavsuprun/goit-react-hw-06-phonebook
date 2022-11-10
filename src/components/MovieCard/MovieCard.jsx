import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TMDBAPI } from 'js/API/TMDBAPI';

import { MovieImage, MovieDescription } from 'components';
import { MovieCardWrapper } from './MovieCard.styled';

const MovieCard = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    (async () => {
      const movieResponse = await TMDBAPI.getMovieById(movieId);
      setMovieData(movieResponse);
    })();
  }, [movieId]);

  useEffect(() => {
    if (movieData) {
      document.title = movieData.title;
    }
  }, [movieData]);

  if (!movieData) {
    return;
  }

  const { title, vote_average, release_date, poster_path, genres, overview } =
    movieData;

  const poster = `${TMDBAPI.PATH_TO_POSTER}${poster_path}`;

  return (
    <MovieCardWrapper>
      <MovieImage poster={poster} title={title} />
      <MovieDescription
        title={title}
        vote_average={vote_average}
        release_date={release_date}
        genres={genres}
        overview={overview}
      />
    </MovieCardWrapper>
  );
};

export default MovieCard;
