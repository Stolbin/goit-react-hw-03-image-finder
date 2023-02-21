import styled from '@emotion/styled';

export const FormSearchbar = styled.form`
  position: fixed;
  padding: 15px;
  top: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  background-color: #ffd700;
  overflow: hidden;
`;
export const BtnSearchbar = styled.button`
  display: inline-block;
  width: 50px;
  height: 52px;
  opacity: 0.6;
  cursor: pointer;
  border: none;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 1;
    transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const InputSearchbar = styled.input`
  display: inline-block;
  width: 20%;
  height: 50px;
  font: inherit;
  font-size: 18px;
  font-weight: 500;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  &::placeholder {
    font-size: 16px;
    color: #778899;
  }
`;
