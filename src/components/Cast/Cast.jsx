import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { TMDBAPI } from 'js/API/TMDBAPI';

import { CastItem } from 'components';
import { CastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    (async () => {
      const castResponse = await TMDBAPI.getMovieCast(movieId);
      setCast(castResponse);
    })();
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <CastList>
      {cast.map(castActor => {
        const { id, name, character, profile_path } = castActor;

        // Setting src for a cast actor image
        let profileImg = null;
        if (profile_path) {
          profileImg = `${TMDBAPI.PATH_TO_POSTER}${profile_path}`;
        }

        return (
          <CastItem
            key={id}
            name={name}
            character={character}
            profileImg={profileImg}
          />
        );
      })}
    </CastList>
  );
};

export default Cast;
