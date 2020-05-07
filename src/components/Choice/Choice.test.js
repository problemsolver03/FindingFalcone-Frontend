import React from 'react';
import Choice from './Choice'
import ReactDOM from 'react-dom'


it('renders properly with default props', () => { 
  const div = document.createElement('div');
    ReactDOM.render(<Choice />, div);
})