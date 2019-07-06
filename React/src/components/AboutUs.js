import React from 'react';

import Header from './Header';
import bgImg from '../images/bgImg.jpg'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn,  MDBView, MDBMask } from 'mdbreact';


class AboutUs extends React.Component {
 
  render() {
    return (
      <div> 
          <MDBView src =  {bgImg}>
            <Header/>
            <MDBMask overlay="white" className="flex-center flex-column text-white text-center">
              <h2>Infotech provides software services</h2>
              <br/>
              <MDBBtn color="info">Lets Explore</MDBBtn>
              <br/>
              <h3>Learn More</h3>
            </MDBMask>     
          </MDBView>
      </div>
    );
  }
}

export default AboutUs;