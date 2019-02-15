import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchErrorMessage from '../SearchErrorMessage/SearchErrorMessage';
import SearchResultsList from '../SearchResultsList/SearchResultsList';
import './App.css';

class App extends React.Component {

  state = {
    data  : {},
    error : null,
  };

  setData = (data) => {
    this.setState({
      data  : data,
      error : null,
    });
  };

  setError = (err) => {
    this.setState({
      data  : {},
      error : err,
    });
  };

  render() {

    return (
      <main id="site-container">
        <SearchForm
          onData={(data) => { this.setData(data) }}
          onError={(err) => { this.setError(err) }}
        />
        <SearchErrorMessage error={this.state.error} />
        <SearchResultsList results={this.state.data} />
      </main>
    );
  }
}

export default App;
