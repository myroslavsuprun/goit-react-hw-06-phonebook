import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const NavBarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 20px;

  list-style-type: none;
`;

export const Link = styled(NavLink)`
  position: relative;
  padding: 6px 12px;

  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 18px;

  transition: color 250ms linear;

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: rgb(28, 86, 156);
  }

  &.active {
    color: rgb(28, 86, 156);

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -18px;

      width: 100%;
      height: 2px;
      border-radius: 10px;
      background-color: darkblue;
    }
  }
`;
