import { Component } from 'react';
import { SlMagnifier } from 'react-icons/sl';

import {
  FormSearchbar,
  BtnSearchbar,
  InputSearchbar,
  BoxInptu,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = { query: '' };

  handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({ query: value });
  };

  handleSubmit = event => {
    const { query } = this.state;
    event.preventDefault();
    this.props.onSubmit(query);
    event.currentTarget.reset();
  };
  render() {
    return (
      <FormSearchbar onSubmit={this.handleSubmit}>
        <BoxInptu>
          <BtnSearchbar type="submit">
            <SlMagnifier style={{ width: 25, height: 25 }} />
          </BtnSearchbar>
          <InputSearchbar
            type="text"
            autoComplete="off"
            onChange={this.handleChange}
            // autoFocus
            placeholder="Search images and photos"
          />
        </BoxInptu>
      </FormSearchbar>
    );
  }
}

export default Searchbar;
