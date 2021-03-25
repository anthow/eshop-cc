import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  border-radius: 0;
  height: 30px;
  box-sizing: border-box;
  min-width: 0;
  &:focus {
    border-color: black;
  }
`;
