import React from 'react';
import axios from 'axios';
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

    
    handleSubmit = (e) => {
      const email= this.state.email;
      const password= this.state.password;
      axios.post('http://localhost:3000/createUser', {
          email : email,
          password: password
      }).then(response => {
          this.setState({ email: response.data.email,
         password: response.data.password,
         token: response.data.token,
         _id: response.data._id})
         
      });
      
      e.preventDefault(); 
      console.log(this.state); 
     }
     
 
    

render () {
    return (
        <form onSubmit ={this.handleSubmit}>
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