import PropTypes from 'prop-types';

import { GenreItem } from 'components/GenreItem';
import { GenresList, GenreTitle } from './GenreList.styled';

const GenreList = ({ genres }) => {
  return (
    <>
      <GenreTitle>Genres:</GenreTitle>
      <GenresList>
        {genres.map(({ name, id }) => (
          <GenreItem key={id} name={name} />
        ))}
      </GenresList>
    </>
  );
};

GenreList.propTypes = {
  genres: PropTypes.array.isRequired,
};

export default GenreList;
