import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
  } from "react-router-dom";
  
const footerComponent=()=>{
    return(
      <Router>

        <div className='footerForStyling'>
          <ul className="footer">
               <li className='Footer'><NavLink exact activeStyle ={{color:'white'}} to="/">Feed Back</NavLink></li>
               <li className='Footer'><NavLink exact activeStyle ={{color:'white'}} to="/">About Us</NavLink></li>
               <li className='Footer'><NavLink exact activeStyle ={{color:'white'}} to="/">More Forms</NavLink></li>
               <li className='Footer'><NavLink exact activeStyle ={{color:'white'}} to="/">Contact Us</NavLink></li>
          </ul>  
          <Switch> 
          <Route exact path="/" />)}/>
            <Route exact path="/"/>)}/>
            <Route exact path="/" /> )}/>
            <Route exact path="/"/>)} />
          </Switch>   
          <div className='FooterforCopyright'>
          &copy; 2015 Copyright Text
          </div>    
        </div>
      </Router>
    )
}
export default footerComponent;