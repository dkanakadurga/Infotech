import React from 'react';
import NavTop from './NavTop';



class Header extends React.Component {
    

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