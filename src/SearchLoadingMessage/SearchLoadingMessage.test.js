import React from 'react';
import ReactDOM from 'react-dom';
import SearchLoadingMessage from './SearchLoadingMessage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchLoadingMessage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
