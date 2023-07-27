import { ImFilm } from 'react-icons/im';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/material';
import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';
import { Loader } from 'components';
import { routes } from 'routes';

export const Header = () => {
  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <ImFilm size="30px" color="#ffffff80" />
            <LinkWrapper>
              <NavLinkStyled to={routes.HOME}>Home</NavLinkStyled>
              <NavLinkStyled to={routes.MOVIES}>Movies</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
