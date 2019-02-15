import React from 'react';
import ReactDOM from 'react-dom';
import SearchErrorMessage from './SearchErrorMessage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchErrorMessage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
