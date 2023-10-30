import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home'
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';
import Pnf from './components/Pnf';
import Ex5 from './components/Ex5';
import Ex6 from './components/Ex6';

function App(props) {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path={'/'} element={ <Home /> } />
        <Route path={'/home'} element={ <Home /> } />
        <Route path={'/ex1'} element={ <Ex1 /> } />
        <Route path={'/ex2'} element={ <Ex2 /> } />
        <Route path={'/ex3'} element={ <Ex3 /> } />
        <Route path={'/ex4'} element={ <Ex4 /> } />
        <Route path={'/ex5'} element={ <Ex5 /> } />
        <Route path={'/ex6'} element={ <Ex6 /> } />
        <Route path={'/*'} element={ <Pnf /> } />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App;
