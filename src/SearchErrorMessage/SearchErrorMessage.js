import React from 'react';
import PropTypes from 'prop-types';
import './SearchErrorMessage.css';

function SearchErrorMessage (props) {

  if (!props.error) {
    return null;
  }

  return (
    <div className="error-message">{props.error.message}</div>
  );
}

export default SearchErrorMessage;

SearchErrorMessage.defaultProps = {
  error: null,
};

SearchErrorMessage.propTypes = {
  error: PropTypes.instanceOf(Error),
};
