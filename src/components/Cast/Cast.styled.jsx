import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: 1040px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));

  grid-gap: 16px;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;

  list-style: none;
`;
