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

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 26px;
  text-align: center;
`;
