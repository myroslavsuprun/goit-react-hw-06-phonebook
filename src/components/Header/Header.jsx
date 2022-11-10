import { NavBar } from 'components';

import { HeaderStyled, HeaderStub } from './Header.styled';

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <NavBar />
      </HeaderStyled>
      <HeaderStub />
    </>
  );
};

export default Header;
