import React from "react";
import {
  NavLink,
} from "react-router-dom";
const Portfolio = props => {
  return (
    <form className="skills">
      <ol type="1" start="3">
        <li>Skills and location</li>
      </ol>
      <hr />
      <p>
        {" "}
        Prove you are IBM's next great designer by showing us who you are. What
        you have done. How you think. Tell us your story.
      </p>
      <br />

      <div className="portfolio">
        <input className={props.validate.portfolioLink && props.data.isTouched.portfolioLink? 'invalid' : ''}
          id="portfolio"
          type="text"
          placeholder="Portfolio link"
          name="portfolioLink"
          onChange={props.change}
          value={props.data.portfolioLink}
          onBlur={props.handleBlurEvent}
        />
          {props.data.isTouched.portfolioLink &&
					props.validate.portfolioLink && (
					<span className="err-msg">{props.validate.portfolioLink}</span>
          )}
        <br />
        <br />
        <textarea className={props.validate.additionalLink && props.data.isTouched.additionalLink ? 'invalid' : ''}
          placeholder="Anything else(link availability etc)?"
          name="additionalLink"
          onChange={props.change}
          value={props.data.additionalLink}
          onBlur={props.handleBlurEvent}
        />
            {props.data.isTouched.additionalLink &&
					props.validate.additionalLink && (
						<span className="err-msg">{props.validate.additionalLink}</span>
          )}

        <br />
        <br />
      <input type="submit" name="submit" value="Submit" id="submit" />
      </div>
      <div>
     <NavLink exact activeStyle ={{color:'orange'}} to="/Skills&Location">Previous</NavLink>
     <NavLink exact activeStyle ={{color:'orange'}} to="/Home">Next</NavLink>
     </div>
    </form>
    
  );
};
export default Portfolio;
