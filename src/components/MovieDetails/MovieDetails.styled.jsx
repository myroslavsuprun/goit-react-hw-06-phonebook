import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  max-width: 86px;

  padding: 4px;
  margin: 40px auto 10px 60px;

  border: 1px solid black;
  border-radius: 8px;

  text-decoration: none;
  color: black;

  :hover,
  :focus-within {
    background-color: aliceblue;
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1),
      -1px -1px 1px 0px rgba(0, 0, 0, 0.1);
  }

  cursor: pointer;
`;
