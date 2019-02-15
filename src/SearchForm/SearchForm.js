import React from 'react';
import PropTypes from 'prop-types';
import search from '../search';
import './SearchForm.css';

class SearchForm extends React.Component {

  handleFormSubmit = (e) => {
    e.preventDefault();

    const term = e.target.elements['search-term'].value.trim();

    if (term.length < 1) {
      // TODO set error flag, do display in form
      return;
    }

    this.props.onLoading();

    search
      .searchPeople(term)
      .then((data) => {
        this.props.onData({ people: data.results });
      })
      .catch((err) => {
        this.props.onError(err);
      })
  }

  render () {
    return (
      <form id="search-form" onSubmit={(e) => { this.handleFormSubmit(e) }}>
        <label htmlFor="search-term">Character Name</label>
        <input id="search-term" type="text"></input>
        <button>Search</button>
      </form>
    );
  }
}

SearchForm.defaultProps = {
  onLoading : () => {},
  onData    : () => {},
  onError   : () => {},
};

SearchForm.propTypes = {
  onLoading : PropTypes.func,
  onData    : PropTypes.func,
  onError   : PropTypes.func,
};

export default SearchForm;
