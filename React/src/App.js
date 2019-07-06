import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Data from './components/Data';
import LogOut from './components/LogOut';


function App() {
  return (
    <div>
      <Route path = "/" exact component = {AboutUs}/>
      <Route path = "/AboutUs" component = {AboutUs} />
      <Route path = "/HowItWorks" component = {HowItWorks}/>
      <Route path = "/SignUp" component = {SignUp}/>
      <Route path = "/LogIn" component = {LogIn} />
      <Route path = "/Data" component = {Data}/>
      <Route path = "/LogOut" component = {LogOut}/>
    </div>
  );
}

export default App;
