import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import IndecitionApp from './components/IndecitionApp';
import 'normalize.css/normalize.css';
import './style/style.scss';
  Header.defaultProps={
    title: 'Indecision App'
  }
  ReactDOM.render(<IndecitionApp options={[]}/>, document.getElementById('appRoot'));