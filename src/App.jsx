import React from 'react';

import Header from './header';
import SearchBar from './SearchBar';
import ContentGrid from './ContentGrid';
import Sidebar from './SideBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <div className="main-content">
        <ContentGrid />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;