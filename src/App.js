import React from 'react';
import './App.css';
import Nav from './components/layout/Nav';
import SearchPage from './components/Search/SearchPage';

const  App = () => {
  return (
    <div className="App">
      <Nav/>
      <SearchPage />
    </div>
  );
};

export default App
