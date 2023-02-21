import React, { Component } from 'react';
import { getImages } from 'api/api-servises';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import { Button } from 'components/Button/Button';
import Loader from 'components/Loader';
import { Conteiner } from './App.styled';

const errorMessages = {
  noImages: 'Whoops, something went wrong! Please try again later!',
};

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isEmpty: false,
    showBtn: false,
    isLoading: false,
    isError: null,
    showModal: false,
  };
  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      try {
        this.setState({ isLoading: true });
        const { hits, totalHits } = await getImages(query, page);
        console.log(hits);
        if (!hits?.length) {
          this.setState({ isEmpty: true });
          return;
        }
        this.setState(prevState => ({
          images: prevState.images.concat(hits),
          showBtn: page < Math.ceil(totalHits / 12),
        }));
      } catch {
        this.setState({ isError: errorMessages.noImages });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { images, isEmpty, query, showBtn, isError, isLoading } = this.state;
    return (
      <Conteiner>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {showBtn && <Button onClick={this.onLoadMore} />}
        {isEmpty && (
          <h2>
            There are no pictures with the name {query} in our database, try
            another request!
          </h2>
        )}
        {isError && <h2>{isError}</h2>}
      </Conteiner>
    );
  }
}

export default App;