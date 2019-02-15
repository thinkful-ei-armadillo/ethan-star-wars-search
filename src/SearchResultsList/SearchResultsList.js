import React from 'react';
import PropTypes from 'prop-types';
import './SearchResultsList.css';

function SearchResultsList (props) {

  console.log('People Results', props.results.people);

  return (

    <p>IOU one search results list</p>
  );
}

SearchResultsList.defaultProps = {
  results: {},
};

SearchResultsList.propTypes = {
  results: PropTypes.object
};

export default SearchResultsList;
