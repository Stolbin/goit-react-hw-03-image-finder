import styled from '@emotion/styled';

export const FormSearchbar = styled.form`
  position: fixed;
  padding: 15px;
  top: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  background-color: #ffa500;
  overflow: hidden;
  box-shadow: 1px 2px 3px #000000;
`;
export const BoxInptu = styled.div`
  display: flex;
  width: 20%;
  height: 50px;
  box-shadow: 1px 2px 3px #000000;
`;
export const BtnSearchbar = styled.button`
  width: 50px;
  height: 50px;
  opacity: 0.6;
  cursor: pointer;
  border: none;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: opacity 0.25s linear;
  &:hover {
    opacity: 1;
    transition: opacity 0.25s linear;
  }
`;
export const InputSearchbar = styled.input`
  width: 100%;
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
