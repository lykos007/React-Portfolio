import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
        <Header />  
     THIS IS MY REACT PROJECT 
    </div>
  );
}

export default App;
