import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import { MovieCard, MovieAdditionalInfo, Container, Loader } from 'components';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      <Link to={backLinkHref}>
        <FaArrowLeft style={{ marginRight: '4px' }} /> Go back
      </Link>
      <Container>
        <MovieCard />
        <MovieAdditionalInfo />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MovieDetails;
