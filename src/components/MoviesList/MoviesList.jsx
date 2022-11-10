import { MovieItem } from 'components/MovieItem';
import PropTypes from 'prop-types';

import { MoviesListStyled } from './MoviesList.styled';

const MoviesList = ({ moviesData }) => {
  return (
    <MoviesListStyled>
      {moviesData.map(({ title, id }) => {
        return <MovieItem key={id} id={id} title={title} />;
      })}
    </MoviesListStyled>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  moviesData: PropTypes.array.isRequired,
};
