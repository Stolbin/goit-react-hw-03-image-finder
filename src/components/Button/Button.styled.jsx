import styled from '@emotion/styled';

export const Btn = styled.button`
  padding: 8px 20px 10px 20px;
  font-family: 'Segoe UI';
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
  background: #faebd7;
  margin-left: auto;
  margin-right: auto;
  border: none;
  box-shadow: 1px 2px 3px #000000;
  transition: background 0.45s linear;
  &:hover,
  :focus {
    background: #f4a460;
    transition: background 0.45s linear;
  }
`;
