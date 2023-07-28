import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100px;
  border: 1px solid #142062;
  border-radius: 40px 5px 5px 40px;
  padding: 5px 15px;
  color: #142062;
  transition: color 250ms ease-out, font-weight 200ms ease-out,
    background-color 250ms ease-out;

  &:hover,
  &:focus {
    color: #fff;
    font-weight: bold;
    background-color: #142062;
  }
`;

export const SubTitle = styled.h3`
  margin-top: 25px;
  margin-bottom: 15px;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 30px;
  margin-left: 15px;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100px;
  border-bottom: 1px solid #142062;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #142062;
  font-size: 16px;
  font-weight: 600;

  &:hover,
  &:focus,
  &:active {
    color: #2138ba;
    border-bottom: 2px solid #2138ba;
    font-weight: 700;
  }
`;
