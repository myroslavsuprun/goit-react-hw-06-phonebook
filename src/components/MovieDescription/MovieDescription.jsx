import PropTypes from 'prop-types';

import { GenreList } from 'components';
import {
  Rating,
  RatingSpan,
  OverviewTitle,
  Overview,
} from './MovieDescription.styled';

const MovieDescription = ({
  title,
  vote_average,
  release_date,
  genres,
  overview,
}) => {
  const release_year = release_date.slice(0, 4);
  return (
    <div>
      <h2>
        {title} ({release_year})
      </h2>
      <Rating>
        <RatingSpan>Rating: </RatingSpan>
        {vote_average}
      </Rating>
      <OverviewTitle>overview:</OverviewTitle>
      <Overview>{overview}</Overview>
      <GenreList genres={genres} />
    </div>
  );
};

MovieDescription.propTypes = {
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieDescription;
