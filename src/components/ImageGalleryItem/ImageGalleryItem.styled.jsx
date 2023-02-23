import styled from '@emotion/styled';

export const ItemContainer = styled.li``;
export const ImageGallery = styled.img`
  width: 330px;
  height: 220px;
  border-radius: 4px;
  object-fit: cover;
  box-shadow: 2px 2px 4px #000000;
  transition: scale 0.25s linear, box-shadow 0.25s linear;
  &:hover {
    scale: 1.02;
    box-shadow: 0px 0px 8px #000000;
    transition: scale 0.25s linear, box-shadow 0.25s linear;
  }
`;
