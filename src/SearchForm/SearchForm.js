import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

function SearchForm (props) {

  return (
    <p>IOU one search form</p>
  );
}

SearchForm.defaultProps = {
  onData: () => {},
  onError: () => {},
};

SearchForm.propTypes = {
  onData: PropTypes.func,
  onError: PropTypes.func,
};

export default SearchForm;
