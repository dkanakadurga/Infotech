import React from 'react';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import Logo from './Logo';
import SignUp from './SignUp';
import LogIn from './LogIn';
import LogOut from './LogOut';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer} from 'mdbreact';
import Cookies from 'universal-cookie';



class NavTop extends React.Component {
  
  constructor(props) {
    super(props);
   
   this.cookie = new Cookies();
    this.state = {
      collapse: this.props.collapse,
      isWideEnough: this.props.isWideEnough,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  } 

  IsLoggedIn(){
    if(this.cookie.get('myToken')){
      return true;
    }
    return false;
  }

 

 render() {

  const headerifNotLogged =
    <div>

        <MDBNavbar fixed="top" dark expand="md">
          
        <MDBContainer>

        <MDBNavbarBrand>
        <Logo />
      </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar> 

        <MDBNavbarNav left>
          <MDBNavItem >
            <MDBNavLink to="/AboutUs" component = {AboutUs}>ABOUT US</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/HowItWorks" component = {HowItWorks}>HOW IT WORKS</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#">CASE STUDIES</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#">NEWS</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#">CONTACT</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>

        <MDBNavbarNav right  >
          <MDBNavItem>
            <MDBNavLink  to="/SIGNUP" component= {SignUp}>SIGNUP </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/LOGIN" component= {LogIn}>LOGIN </MDBNavLink>
          </MDBNavItem>
         
        </MDBNavbarNav>
 
        
       </MDBCollapse> 
       </MDBContainer>
        
           </MDBNavbar> 


    </div>;

    const headerLogged  =
    <div>

    <MDBNavbar fixed="top" dark expand="md">
      
    <MDBContainer>

    <MDBNavbarBrand>
    <Logo />
  </MDBNavbarBrand>
    <MDBNavbarToggler onClick={this.onClick} />
    <MDBCollapse isOpen={this.state.collapse} navbar> 

    <MDBNavbarNav left>
      <MDBNavItem >
        <MDBNavLink to="/AboutUs" component = {AboutUs}>ABOUT US</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/HowItWorks" component = {HowItWorks}>HOW IT WORKS</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#">CASE STUDIES</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#">NEWS</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#">CONTACT</MDBNavLink>
      </MDBNavItem>
    </MDBNavbarNav>

    <MDBNavbarNav right  >
      <MDBNavItem>
        <MDBNavLink  to="/LogOut" component= {LogOut}>LOGOUT </MDBNavLink>
      </MDBNavItem>
      
     
    </MDBNavbarNav>

    
   </MDBCollapse> 
   </MDBContainer>
    
       </MDBNavbar> 


</div>;

if(this.IsLoggedIn())
{
  return headerLogged;
} else {
  return headerifNotLogged;
}
}
}
export default NavTop;

