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
              <h2>Souqbox is building the new future <br/> of B2B marketplaces online.</h2>
              <br/>
              <h2>Take 30 seconds to join revolution</h2>
              <br /> 
              <MDBBtn color="info">Create a marketplace now</MDBBtn>
              <br/>
              <h3>Learn More</h3>
            </MDBMask>     
          </MDBView>
      </div>
    );
  }
}

export default AboutUs;