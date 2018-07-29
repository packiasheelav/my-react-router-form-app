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
      <Router>
        <div className="container">
        <ul className="header">
               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to="/Home">Home</NavLink></li>
               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to="/Personal_Information">Personal Information</NavLink></li>
               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to="/Skills&Location">Skills&Location</NavLink></li>
               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to="/Portfolio">Portfolio</NavLink></li>
               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to="/Display">Display Data</NavLink></li>

           </ul>          
            <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/Home'} render={()=>(<Home data={props.data} change={props.change} handleSubmit={props.handleSubmit} validate={props.validate} handleBlurEvent={props.handleBlurEvent}/>)}/>
            <Route exact path={process.env.PUBLIC_URL + '/Personal_Information'} render={()=>(<PersonalInfo data={props.data} change={props.change} validate={props.validate} handleBlurEvent={props.handleBlurEvent}/>)}/>
            <Route exact path={process.env.PUBLIC_URL + '/Skills&Location'} render={()=>(<SkillsLocation data={props.data} change={props.change} validate={props.validate} handleCheckBox={props.handleCheckBox}/> )}/>
            <Route exact path={process.env.PUBLIC_URL + '/Portfolio'} render={()=>(<Portfolio data={props.data} change={props.change} validate={props.validate} handleBlurEvent={props.handleBlurEvent}/>)} />
            <Route exact path={process.env.PUBLIC_URL + '/Display'} render={()=>(<Display data={props.data} displayMessage={props.displayMessage}/>)} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default NavBarComponent;
