import PropTypes from 'prop-types';

import { CharacterSpan } from './CastItem.styled';

const CastItem = ({ name, character, profileImg }) => {
  const imgStub = (
    <img
      width="240"
      src="https://via.placeholder.com/240x360/?text=No+Image+Provided"
      alt={character}
    />
  );

  return (
    <li>
      {profileImg ? (
        <img width="240" src={profileImg} alt={character} />
      ) : (
        imgStub
      )}
      {name && (
        <>
          <h3>{name}</h3>
          <p>
            <CharacterSpan>Character:</CharacterSpan> {character}
          </p>
        </>
      )}
    </li>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profileImg: PropTypes.string,
};

export default CastItem;
