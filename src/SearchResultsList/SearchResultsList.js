import React from 'react';
import PropTypes from 'prop-types';
import './SearchResultsList.css';

class SearchResultsList extends React.Component {

  renderPeopleResults = (results) => {

    if (results.length < 1) {
      return (<h3 id="no-results">No results</h3>);
    }

    const items = results.map((p) => {

      return (
        <li className="result" key={p.url}>
          <h3>{p.name}</h3>
          <ul>
            <li>
              <span className="label">Gender</span>
              {p.gender}
            </li>
            <li>
              <span className="label">Eye Color</span>
              {p.eye_color}
            </li>
            <li>
              <span className="label">Hair Color</span>
              {p.hair_color}
            </li>
            <li>
              <span className="label">Skin Color</span>
              {p.skin_color}
            </li>
            <li>
              <span className="label">Height</span>
              {p.height}
            </li>
            <li>
              <span className="label">Mass</span>
              {p.mass}
            </li>
            <li>
              <span className="label">Birth Year</span>
              {p.birth_year}
            </li>
          </ul>
        </li>
      );
    });

    return (
      <ul id="people-results">
        {items}
      </ul>
    );
  }

  render () {

    if (this.props.results.people) {
      console.log('People Results', this.props.results.people);
      return this.renderPeopleResults(this.props.results.people);
    }

    return null;
  }
}

SearchResultsList.defaultProps = {
  results: {},
};

SearchResultsList.propTypes = {
  results: PropTypes.object
};

export default SearchResultsList;
