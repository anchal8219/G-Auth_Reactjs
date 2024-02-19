import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import {BrowserRouter} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* wrap entire app inside this */}
  {/* <GoogleOAuthProvider clientId="85088877735-cit6qfimhdql8k7tg1632s30dd6jjoha.apps.googleusercontent.com"> */}
  <BrowserRouter>
  <App />
  </BrowserRouter>
  
  {/* </GoogleOAuthProvider>; */}
  </React.StrictMode>
);

