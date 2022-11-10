import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Link } from './MovieItem.styled';

const MovieItem = ({ title, id }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};
