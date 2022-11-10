import { Link, useLocation } from 'react-router-dom';

import { AdditionalInfoList } from './MovieAdditionalInfo.styled';

const MovieAdditionalInfo = () => {
  const location = useLocation();

  return (
    <>
      <h3>Additional Information</h3>
      <AdditionalInfoList>
        <li>
          <Link to="cast" state={{ from: location.state?.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </Link>
        </li>
      </AdditionalInfoList>
    </>
  );
};

export default MovieAdditionalInfo;
