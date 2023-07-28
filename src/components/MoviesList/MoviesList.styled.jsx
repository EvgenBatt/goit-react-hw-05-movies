import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Ol = styled.ol`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  gap: 9px;
`;

export const Li = styled.li`
  padding-left: 8px;
`;

export const LinkStyled = styled(Link)`
  color: #000000;

  &:hover,
  &:focus {
    color: #ff3842;
    font-weight: bold;
  }

  &:visited {
    color: #818080a8;
  }
`;
