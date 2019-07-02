import React, { Component } from 'react';
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '',
                     password : '' ,
                     id : ''
                     };
    
    }

    handlechange = (e)  => {

        const name = e.target.name;
        const value = e.target.value; 
        this.setState({
           [name] : value })
    }
    

render () {
    return (
        <form>
        <label>
          Enter Email
          <input type="text" value = {this.state.email} onChange = {this.handlechange} name="email" />
        </label>
        <label>
          Choose Password
          <input type="Password" value = {this.state.password}  onChange = {this.handlechange} name="password" />
        </label>
        <input type="submit" value="Create User" />
      </form>);
}
}
 export default SignUp;