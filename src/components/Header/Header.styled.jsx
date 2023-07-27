import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #142062;
  box-shadow: 0px 2px 10px 1px #142062;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 28px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #ffffffc9;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  transform: scale(0.9);

  &:hover,
  &:focus {
    color: #ff3842;
    background-color: transparent;
  }

  &.active {
    color: #ff3842;
    background-color: #ffffffe3;

    padding: 6px 12px;
    border-radius: 4px;

    transform: scale(1);
    pointer-events: none;
  }
`;
