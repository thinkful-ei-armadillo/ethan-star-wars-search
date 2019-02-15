import React from 'react';
import PropTypes from 'prop-types';
import './SearchLoadingMessage.css';

function SearchLoadingMessage (props) {

  if (!props.loading) {
    return null;
  }

  return (
    <div id="loading-message">Loading ...</div>
  );
}

SearchLoadingMessage.defaultProps = {
  loading: false,
};

SearchLoadingMessage.propTypes = {
  loading: PropTypes.bool,
};

export default SearchLoadingMessage;
