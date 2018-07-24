import React from "react";
import {
  NavLink,
} from "react-router-dom";

const SkillsLocation = props => {
  return (
    <form>
      <div className="skills">
        <ol type="1" start="2">
          <li>Skills and location</li>
        </ol>
        <hr />
        <p>Which is your primary design discipline?</p>
      </div>
      <div className="buttons">
        <div className="checkBox">
          <input type="radio" name="primaryDiscipline" id="box1" checked ='true' onChange={props.change} value='Design Research' />
          <label htmlFor="box1">Design Research</label>
        </div>

        <div className="checkBox">
          <input type="radio" name="primaryDiscipline" id="box2" onChange={props.change} value='Visual Design' />
          <label htmlFor="box2">Visual Design</label>
        </div>

        <div className="checkBox">
          <input type="radio" name="primaryDiscipline" id="box3" onChange={props.change} value='UX Design' />
          <label htmlFor="box3">UX Design</label>
        </div>

        <div className="checkBox">
          <input type="radio" name="primaryDiscipline" id="box4" onChange={props.change} value='Front-end Dev'  />
          <label htmlFor="box4">Front-end Dev</label>
        </div>

      </div>

      <div className="r1">
        <div className="c1" >
          <h4>Do you have experience with anyother disciplines?</h4>
          <div className={props.validate.discipline ?  "   " : "invalid"}>
          <input
            className="checkBox"
            type="checkbox"
            name="discipline"
            value="Visual Design"
            id="ck1"
            onChange={props.change}
            checked='true'
            //checked={props.data.discipline.includes("Visual Design")}
          />
          <label htmlFor="ck1"> Visual design</label>
          <br />
          <input
            className="checkBox"
            type="checkbox"
            name="discipline"
            value ="UX Design"
            id="ck2"
            onChange={props.change}
            checked={props.data.discipline.includes('UX Design')}
          />
          <label htmlFor="ck2">UX Design</label>

          <br />
          <input
            className="checkBox"
            type="checkbox"
            name="discipline"
            value="Frontend Development"
            id="ck3"
            onChange={props.change}
            checked ={props.data.discipline.includes('Frontend Development')}
          />
          <label htmlFor="ck3">Frontend Development</label>
          <br />
					<span className="err-msg">{props.validate.discipline}</span>
          </div>
        </div>

        <div className="c2">
          <h3>where r u interested in working?</h3>
          <p>
            you must be logically authorized to work without visa
            <br />sponshorship in location you choose
          </p>
          <p id="error" />
        <div>
          <input
            className="checkBox1"
            type="checkbox"
            value="Austin,Texas"
            id="ck4"
            name="interestedPlace"
            onChange={props.change}
            checked={props.data.interestedPlace.includes('Austin,Texas')}
          />
          <label htmlFor="ck4">Austin,Texas</label>
          <br />
          <input
            className="checkBox2"
            type="checkbox"
            name="interestedPlace"
            value="Newyork,Newyork"
            id="ck5"
            onChange={props.change}
            checked={props.data.interestedPlace.includes('Newyork,Newyork')}
          />
          <label htmlFor="ck5">Newyork,Newyork </label>

          <br />
          <input
            className="checkBox2"
            type="checkbox"
            name="interestedPlace"
            value="Toronto,Canada"
            id="ck6"
            onChange={props.change}
            checked='true'
           // checked={props.data.interestedPlace.includes('Toronto,Canada')}
          />
          <label htmlFor="ck6">Toronto,Canada </label>

          <br />
          <input
            className="checkBox2"
            type="checkbox"
            name="interestedPlace"
            value='Dublin,Ireland'
            onChange={props.change}
            checked={props.data.interestedPlace.includes('Dublin,Ireland')}

            id="ck7"
          />
          <label htmlFor="ck7">Dublin,ireland </label>

          <br />
          <input className="checkBox2"
           type="checkbox"
            id="ck8"
            name='interestedPlace'
            value='Hursley, United Kingdom'
            onChange={props.change}
            checked={props.data.interestedPlace.includes('Hursley, United Kingdom')}
            />
          <label htmlFor="ck8">Hursley, United Kingdom </label>
          <br />
          <input
            className="checkBox2"
            type="checkbox"
            name="interestedPlace"
            value="Boeblingan,Germany"
            id="ck9"
            onChange={props.change}
            checked={props.data.interestedPlace.includes('Boeblingan,Germany')}
          />
          <label htmlFor="ck9">Boeblingan,Germany </label>

          <br />
          <input
            className="checkBox2"
            type="checkbox"
            name="interestedPlace"
            value="some where else"
            onChange={props.change}
            checked={props.data.interestedPlace.includes('some where else')}
            id="ck10"
          />
          <label htmlFor="ck10">some where else</label>

          </div>
          {/* {(<span className="err-msg">{props.validate.interestedPlace}</span>)} */}

        </div>
      </div>
      <div>
      <NavLink exact activeStyle ={{color:'orange'}} to="/Personal_Information">Previous</NavLink>
      <NavLink exact activeStyle ={{color:'orange'}} to="/Portfolio">Next</NavLink>
      </div>
    </form>
  );
};
export default SkillsLocation;
