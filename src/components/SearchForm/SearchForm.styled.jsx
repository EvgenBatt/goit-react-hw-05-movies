import styled from '@emotion/styled';
import { TextField, Button } from '@mui/material';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

export const Input = styled(TextField)`
  margin-right: 10px;
  width: 250px;
`;

export const SubmitBtn = styled(Button)`
  background-color: #182677de;
  transition: background-color 250ms ease-out;

  &:hover {
    background-color: #182677;
  }
`;
