import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchErrorMessage from '../SearchErrorMessage/SearchErrorMessage';
import SearchLoadingMessage from '../SearchLoadingMessage/SearchLoadingMessage';
import SearchResultsList from '../SearchResultsList/SearchResultsList';
import './App.css';

class App extends React.Component {

  state = {
    loading : false,
    data    : {},
    error   : null,
  };

  setLoading = () => {
    this.setState({
      loading : true,
      data    : {},
      error   : null,
    });
  }

  setData = (data) => {
    this.setState({
      loading : false,
      data    : data,
      error   : null,
    });
  };

  setError = (err) => {
    this.setState({
      loading : false,
      data    : {},
      error   : err,
    });
  };

  render() {

    return (
      <main id="site-container">
        <SearchForm
          onLoading={() => { this.setLoading() }}
          onData={(data) => { this.setData(data) }}
          onError={(err) => { this.setError(err) }}
        />
        <SearchErrorMessage error={this.state.error} />
        <SearchLoadingMessage loading={this.state.loading} />
        <SearchResultsList results={this.state.data} />
      </main>
    );
  }
}

export default App;
