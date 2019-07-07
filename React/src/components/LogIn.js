import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import bgImg from '../images/bgImg.jpg';
import Header from './Header';
import {MDBView} from 'mdbreact';
import './loginstyle.scss';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '',
                     password : '',
                    token: '',
                    _id: '',
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
     console.log(email)
     axios.post('http://localhost:3000/users/login', {
         email : email,
         password: password
     }).then(response => {
       console.log(response.data)
       const token = response.data.token;
      const Cookie = new Cookies();
      localStorage.setItem('email', response.data.user.email);
      Cookie.set('myToken', {token}, {path:'/'})
      console.log(JSON.stringify(Cookie.get('myToken').token))
      const Cookiestr = Cookie.get('myToken').token;
      axios.get('http://localhost:3000/users/login/data', {headers: { 'Authorization' : Cookiestr}}).then(response => {
        console.log(response)
      })
        this.props.history.push('/AboutUs');
     });
     
     e.preventDefault(); 
    
    }
    


render () {
    return (

   <div className='loginpage'>
     <MDBView src = {bgImg}>
     <Header/>
     <div className = 'loginClass'>
     <form onSubmit={this.handleSubmit}>
       <div>
      <label> Email  </label><br/>
      <input type="text" value = {this.state.email} onChange = {this.handlechange} name="email" />
      </div>
      <div>    
        <label>Password</label><br/>
        <input type="Password" value = {this.state.password}  onChange = {this.handlechange} name="password" />
        </div><br/>
        
        <input type="submit" value= "LogIn" />
      </form>


     </div>
       
      </MDBView>
      </div>
      );
}
}
 export default LogIn;