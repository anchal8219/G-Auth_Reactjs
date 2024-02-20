import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

import {
  Switch,
  Route,
  Routes
} from "react-router-dom";

import { FirstPage, SecondPage } from './components';


const App=() => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={ <Home/> } /> */}
        <Route path="/first" element={ <FirstPage/> } />
        <Route path="/second" element={ <SecondPage/> } />
      </Routes>
    </>
  )
}

export default App
