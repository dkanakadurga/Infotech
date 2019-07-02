import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';


ReactDOM.render(
    
    <BrowserRouter>
      <Route path = "/"  component= {App}/>
     </BrowserRouter>
, document.getElementById('root'));
