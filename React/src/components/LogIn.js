import React from 'react';
import axios from 'axios';
class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '',
                     password : '',
                    token: '',
                    _id: '' };
    
    }

    handlechange = (e)  => {

        const name = e.target.name;
        const value = e.target.value; 
        this.setState({
           [name] : value })
    }

    handleSubmit = (e) => {
     const email= this.state.email;
     const password= this.state.password;
     console.log(email)
     axios.post('http://localhost:3000/users/login', {
         email : email,
         password: password
     }).then(response => {
       console.log(response.data.token)
       console.log(response.data.user)
        
     });
     
     e.preventDefault(); 
    
    }
    


render () {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="text" value = {this.state.email} onChange = {this.handlechange} name="email" />
        </label>
        <label>
          Password
          <input type="Password" value = {this.state.password}  onChange = {this.handlechange} name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>);
}
}
 export default LogIn;