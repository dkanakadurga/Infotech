import React, {Component} from 'react';
import NavTop from './NavTop';
import Logo from './Logo';


import { MDBNavbar, MDBNavbarBrand,MDBBtn, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer,MDBView, MDBMask, MDBRow, MDBCol } from 'mdbreact';


class Header extends React.Component {
    constructor(props) {
      super(props);
   
    }

render() {
    return(
    <div>
     <header>
       <NavTop collapse ={false} isWideEnough={false}/>
     </header>

    </div>

    );
}

}

export default Header;