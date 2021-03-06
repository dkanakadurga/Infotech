import React from 'react'
import axios from 'axios';
import bgImg from '../images/bgImg.jpg';
import Header from './Header';
import {MDBView} from 'mdbreact';
import './signupstyle.scss';
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '',
                     password : '' ,
                     id : '',
                     error: '',
                     message: ''
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
          console.log(response);
         this.setState({message: 'User created Successfully', error: ''})
      }).catch(error => {
        console.log(error.response.data)
         this.setState({message: '', error: error.response.data})
      });
      
      e.preventDefault(); 
    
     }
     
 
    

render () {
    return (
      <div className='signuppage'>
      <MDBView src = {bgImg}>
      <Header/>
      <div className = 'signupClass'>
        <form onSubmit ={this.handleSubmit}>
          <div>
        <label> Enter Email  </label>
        </div>
        <div>
        <input type="text" value = {this.state.email} onChange = {this.handlechange} name="email" />
        </div>
        <div>
        <label>Choose Password </label>
        </div>
        <div>
        <input type="Password" value = {this.state.password}  onChange = {this.handlechange} name="password" />
        </div>
        <br/>
        <input type="submit" value="Create User" />
      </form>
      {this.state.error ? (<div> {this.state.error} </div>): (<div>{this.state.message}</div>)}
      </div>
      </MDBView>
      </div>
      
      );
}
}
 export default SignUp;