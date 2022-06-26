import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './redux/app/store';
import Posts from './Component/Posts';

function App() {
  return (
    <div className="App">
      <h3>PostBook</h3>
      <Posts></Posts>
    </div>
  );
}

export default App;
