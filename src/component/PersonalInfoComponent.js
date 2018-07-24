import React from "react";
import {
  NavLink
} from "react-router-dom";
const PersonalInfoComponent = props => {
  return (
    <form>
      <ol type="1">
        <li>Personal information</li>
      </ol>
      <hr />
      <div className="row">
        <div className="column1">
          <input className={props.validate.nameValue && props.data.isTouched.nameValue ? 'invalid' : ''}
            id="nameValidation"
            placeholder="Full Name*"
            name="nameValue"
            onChange={props.change}
            value={props.data.nameValue}
            onBlur={props.handleBlurEvent}
          />
          {props.data.isTouched.nameValue &&
					props.validate.nameValue && (
						<span className="err-msg">{props.validate.nameValue}</span>
					)}


        {/* <span className="err-msg">{props.validate.nameValue}</span> */}
          <br />
          <input className={props.validate.emailValue && props.data.isTouched.emailValue? 'invalid' : ''}
            placeholder="Email*"
            name="emailValue"
            onChange={props.change}
            value={props.data.emailValue}
            onBlur={props.handleBlurEvent}
          />
            {props.data.isTouched.emailValue &&
					props.validate.nameValue && (
						<span className="err-msg">{props.validate.emailValue}</span>
					)}
          <br />
          <input className={props.validate.reEnterEmailValue && props.data.isTouched.reEnterEmailValue ? 'invalid' : ''}
            placeholder="Re-enter email*"
            name="reEnterEmailValue"
            value={props.data.reEnterEmailValue}
            onChange={props.change}
            onBlur={props.handleBlurEvent}
          />
          {props.data.isTouched.reEnterEmailValue &&
					props.validate.reEnterEmailValue && (<span className="err-msg">{props.validate.reEnterEmailValue}</span>
					)}
          <br />
          <br />
        </div>

        <div className="column2">
          <input className={props.validate.phoneNoValue && props.data.isTouched.phoneNoValue? 'invalid' : ''}
            type="number"
            id="phoneNumber"
            placeholder="Phone number*"
            name="phoneNoValue"
            value={props.data.phoneNoValue}
            onChange={props.change}
            onBlur={props.handleBlurEvent}
          />
          {props.data.isTouched.phoneNoValue && props.validate.phoneNoValue && (<span className="err-msg">{props.validate.phoneNoValue}</span>
					)}

        </div>

        <div className="column3">
          <input className={props.validate.address1Value && props.data.isTouched.address1Value ? 'invalid' : ''}
            type="text"
            id="address1"
            placeholder="Address*"
            name="address1Value"
            value={props.data.address1Value}
            onChange={props.change}
            onBlur={props.handleBlurEvent}/>
          {props.data.isTouched.address1Value && props.validate.address1Value && (<span className="err-msg">{props.validate.address1Value}</span>)}

          <input className={props.validate.address2Value && props.data.isTouched.address2Value ? 'invalid' : ''}
            type="text"
            id="address2"
            name="address2Value"
            value={props.data.address2Value}
            onChange={props.change}
            onBlur={props.handleBlurEvent}/>
           {props.data.isTouched.address2Value && props.validate.address2Value && (<span className="err-msg">{props.validate.address2Value}</span>)}

        </div>
        <div className="column4">
          <input className={props.validate.cityValue && props.data.isTouched.cityValue ? 'invalid' : ''}
            id="city"
            type="text"
            name="cityValue"
            placeholder="City*"
            value={props.data.cityValue}
            onChange={props.change}
            onBlur={props.handleBlurEvent}/>
           {props.data.isTouched.cityValue && props.validate.cityValue && (<span className="err-msg">{props.validate.cityValue}</span>)}

          <input className={props.validate.stateValue && props.data.isTouched.stateValue ? 'invalid' : ''}
            id="state"
            type="text"
            placeholder="State"
            name='stateValue'
            value={props.data.stateValue}
            onChange={props.change}
            onBlur={props.handleBlurEvent}

          />
          {props.data.isTouched.stateValue &&
					props.validate.stateValue && (
						<span className="err-msg">{props.validate.stateValue}</span>
          )}


          <input className={props.validate.countryValue && props.data.isTouched.countryValue ? 'invalid' : ''}
            id="country"
            type="text"
            placeholder="country/Region"
            name='countryValue'
            value={props.data.countryValue}
            onChange={props.change}
            onBlur={props.handleBlurEvent}
          />
           {props.data.isTouched.countryValue &&
					props.validate.countryValue && (
						<span className="err-msg">{props.validate.countryValue}</span>
          )}


          <input className={props.validate.zipValue && props.data.isTouched.zipValue ? 'invalid' : ''}
            id="postalCode"
            type="number"
            placeholder="zip/postal code"
            name='zipValue'
            value={props.data.zipValue}
            onChange={props.change}
            onBlur={props.handleBlurEvent}/>
           {props.data.isTouched.zipValue && props.validate.zipValue && (<span className="err-msg">{props.validate.zipValue}</span>)}


        </div>
        <div className="column5">
          <input className={props.validate.howDidYouHear && props.data.isTouched.howDidYouHear? 'invalid' : ''}
            type="text"
            placeholder="How did you hear about us?"
            name="howDidYouHear"
            value={props.data.howDidYouHear}
            onChange={props.change}
            onBlur={props.handleBlurEvent}/>
            {props.data.isTouched.howDidYouHear && props.validate.howDidYouHear && (<span className="err-msg">{props.validate.howDidYouHear}</span>
          )}
        </div>
      </div>
      <div>
      <NavLink exact activeStyle ={{color:'orange'}} to="/">Previous</NavLink>
      <NavLink exact activeStyle ={{color:'orange'}} to="/Skills&Location">Next</NavLink>
      </div>
      <button type="submit" >Submit</button>
      </form>
  );
};
export default PersonalInfoComponent;
