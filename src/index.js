import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './containers/header';
import Home from './containers/home';
import About from './containers/about';
import Footer from './containers/footer';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
