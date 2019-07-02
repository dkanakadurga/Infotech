import React, {Component} from 'react';
import bgImg from '../images/bgImg.jpg';
import Header from './Header';
import {MDBView} from 'mdbreact';
import ReactPlayer from 'react-player';
import './responsive_video.scss';
class HowItWorks extends React.Component {
    constructor(props) {
      super(props);
      }

 render() {
    return(

        <div class = "hpage">
          <MDBView src =  {bgImg}>
              <Header/>
              
             <div class = "myvideo">
             <h1>       Here is how it works</h1>
               <ReactPlayer class = "videoclass" url='https://www.youtube.com/watch?v=EngW7tLk6R8'/>
            </div>
           </MDBView>
               
           
        </div>);
};
}

export default HowItWorks;