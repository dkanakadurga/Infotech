import React from 'react';
import bgImg from '../images/bgImg.jpg';
import Header from './Header';
import {MDBView} from 'mdbreact';
import ReactPlayer from 'react-player';
import './responsive_video.scss';
class HowItWorks extends React.Component {
    

 render() {
    return(

        <div className = "hpage">
          <MDBView src =  {bgImg}>
              <Header/>
              
             <div className = "myvideo">
             <h1>       Here is how it works</h1>
               <ReactPlayer className = "videoclass" url='https://www.youtube.com/watch?v=EngW7tLk6R8'/>
            </div>
           </MDBView>
               
           
        </div>);
};
}

export default HowItWorks;