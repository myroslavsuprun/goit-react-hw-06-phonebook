import PropTypes from 'prop-types';
import { GenreItemStyled } from './GenreItem.styled';

const GenreItem = ({ name }) => {
  return <GenreItemStyled>{name}</GenreItemStyled>;
};

GenreItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GenreItem;
