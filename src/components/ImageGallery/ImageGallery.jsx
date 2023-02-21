import PropTypes from 'prop-types';
import { ConteinerImgGallery, ImgGalleryItem } from './ImageGallery.styled';

const ImageGallery = ({ images }) => (
  <ConteinerImgGallery>
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImgGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
      />
    ))}
  </ConteinerImgGallery>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ImageGallery;
