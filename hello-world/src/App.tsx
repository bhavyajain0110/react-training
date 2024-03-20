import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/pageHeader/Header';
import Transactions from './components/Transactions/Transactions';
import Search from './components/Search/Search';
import Greeting from './components/Greeting';
import SongList from './components/Songs/SongList';

function App() {
  return (
    <>
    <Header></Header>
    <Search></Search>
    <Transactions></Transactions>
    </>
  );
}

export default App;
