import React from 'react';
import PropTypes from 'prop-types';
import './SearchErrorMessage.css';

function SearchErrorMessage (props) {

  if (!props.error) {
    return null;
  }

  return (
    <div id="error-message">{props.error.message}</div>
  );
}

SearchErrorMessage.defaultProps = {
  error: null,
};

SearchErrorMessage.propTypes = {
  error: PropTypes.instanceOf(Error),
};

export default SearchErrorMessage;
