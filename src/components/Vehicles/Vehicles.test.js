import React from 'react';
import Vehicles from './Vehicles'
import ReactDOM from 'react-dom'


it('renders properly', () => { 
  const div = document.createElement('div');
  ReactDOM.render(<Vehicles />, div);
})