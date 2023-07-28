import styled from '@emotion/styled';

export const Ul = styled.ul`
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 30px;
  list-style: none;
`;

export const Li = styled.li`
  flex: 1 1 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 200px;
`;

export const Image = styled.img`
  max-height: 280px;
`;

export const TextWrap = styled.div`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 18px;
`;

export const Text = styled.p`
  font-size: 15px;
`;