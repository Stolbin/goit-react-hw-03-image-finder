import styled from '@emotion/styled';

export const SearchbarConteiner = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #ffa500;
  box-shadow: 0px 2px 4px -1px #72695a;
`;
export const FormSearchbar = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 2px 3px #000000;
`;
export const BtnSearchbar = styled.button`
  display: inline-block;
  width: 50px;
  height: 44px;
  border: none;
  color: #708090;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  cursor: pointer;
  outline: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 1;
    transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const InputSearchbar = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 0px 10px;
  &::placeholder {
    font-size: 16px;
    color: #778899;
  }
`;
