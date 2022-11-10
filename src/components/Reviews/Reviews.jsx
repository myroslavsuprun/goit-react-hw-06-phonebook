import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { TMDBAPI } from 'js/API/TMDBAPI';

import { ReviewItem } from 'components';
import { ReviewsList, ReviewWarning } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    (async () => {
      const reviewsResponse = await TMDBAPI.getMovieReviews(movieId);
      setReviews(reviewsResponse);
    })();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  if (reviews.length <= 0) {
    return <ReviewWarning>There are no reviews yet</ReviewWarning>;
  }

  return (
    <ReviewsList>
      {reviews.map(({ author, content, id }) => {
        return <ReviewItem key={id} content={content} author={author} />;
      })}
    </ReviewsList>
  );
};

export default Reviews;
