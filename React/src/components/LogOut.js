import React, {Component } from 'react';
import Cookies from 'universal-cookie';


class LogOut extends Component {

constructor(props){
    super(props);
    
}

componentDidMount() {
    const cookie = new Cookies;
    cookie.remove('myToken')
    console.log(cookie)
    this.props.history.push('/AboutUs');
    
}

 render() {
     return<div></div>;
 }

  
}

export default LogOut;