import React from 'react';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import Logo from './Logo';
import SignUp from './SignUp';
import LogIn from './LogIn';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer} from 'mdbreact';




class NavTop extends React.Component {
  constructor(props) {
    super(props);
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

 render() {
  return (
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
    
        <MDBNavbarNav right>
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


    </div>);
}
}
export default NavTop;

