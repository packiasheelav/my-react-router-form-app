import React from "react";
import PersonalInfo from './PersonalInfoComponent';
import Portfolio from './Portfolio';
import SkillsLocation from './SkillsLocation';
import Home from './Home';
import Display from './Display';
  
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

const NavBarComponent = (props) => {
  return (
    <div >
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
        <ul className="header">
        
        
        
        
        {{ pathname: '/Display', hash: window.location.hash}}


               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to={{ pathname: '/Home', hash: window.location.hash}}>Home</NavLink></li>
               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to={{ pathname: '/Personal_Information', hash: window.location.hash}}>Personal Information</NavLink></li>
               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to={{ pathname: '/SkillsLocation', hash: window.location.hash}}>Skills&Location</NavLink></li>
               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to={{ pathname: '/Portfolio', hash: window.location.hash}}>Portfolio</NavLink></li>
               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to={{ pathname: '/Display', hash: window.location.hash}}>Display Data</NavLink></li>

           </ul>          
            <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/Home'} render={()=>(<Home data={props.data} change={props.change} handleSubmit={props.handleSubmit} validate={props.validate} handleBlurEvent={props.handleBlurEvent}/>)}/>
            <Route exact path={process.env.PUBLIC_URL + '/Personal_Information'} render={()=>(<PersonalInfo data={props.data} change={props.change} validate={props.validate} handleBlurEvent={props.handleBlurEvent}/>)}/>
            <Route exact path={process.env.PUBLIC_URL + '/SkillsLocation'} render={()=>(<SkillsLocation data={props.data} change={props.change} validate={props.validate} handleCheckBox={props.handleCheckBox}/> )}/>
            <Route exact path={process.env.PUBLIC_URL + '/Portfolio'} render={()=>(<Portfolio data={props.data} change={props.change} validate={props.validate} handleBlurEvent={props.handleBlurEvent}/>)} />
            <Route exact path={process.env.PUBLIC_URL + '/Display'} render={()=>(<Display data={props.data} displayMessage={props.displayMessage}/>)} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default NavBarComponent;
