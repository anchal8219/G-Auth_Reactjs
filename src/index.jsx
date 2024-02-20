import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

// import { FirstPage, SecondPage } from './components';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route path="/first" element={<FirstPage />} />
//       <Route path="/second" element={<SecondPage />} />
//     </Routes>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



