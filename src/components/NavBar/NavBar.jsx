import { NavBarStyled, LinkList, Link } from './NavBar.styled';

const NavBar = () => {
  return (
    <NavBarStyled>
      <LinkList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </LinkList>
    </NavBarStyled>
  );
};

export default NavBar;
