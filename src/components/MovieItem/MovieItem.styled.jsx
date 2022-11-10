import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 20px;
  color: black;
  text-decoration: none;

  transition: color 250ms linear;

  :hover,
  :focus-visible {
    color: rgb(100, 160, 255);
  }
`;
