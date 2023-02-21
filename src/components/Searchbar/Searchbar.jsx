// import PropTypes from 'prop-types';

const Searchbar = () => {
  return (
    <header>
      <form>
        <button type="submit" class="button">
          <span>Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
