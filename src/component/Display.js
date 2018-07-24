import React from "react";

const Display = (props) => {
  
  return (
    <div id="DisplayData">
    <label>Personal Information:</label>
    <h2>{props.data.nameValue}</h2>
    <h2>{props.data.emailValue}</h2>
    <h2>{props.data.address1Value}</h2>
    <h2>{props.data.address2Value}</h2>
    <h2>{props.data.phoneValue}</h2>
    <h2>{props.data.cityValue}</h2>
    <h2>{props.data.stateValue}</h2>
    <h2>{props.data.countryValue}</h2>
    <h2>{props.data.howDidYouHear}</h2>

    <label>Skills and Location:</label>
    <h2>{props.data.skills}</h2>
    <h2>{props.data.primaryDiscipline}</h2>

    <label>Primary Discipline:</label>
     <div>{props.data.discipline}</div>
  
    <label>Interested Places To Work:</label>
    <h2>{props.data.interestedPlace}</h2>

    <label>Experience:</label>
    <h2>{props.data.portfolio}</h2>
    <h2>{props.data.howDidYouHear}</h2>


    <label>Interested Places to Work:</label>
    <h2>{props.data.portfolioLink}</h2>
   <h2>{ props.data.additionalLink}</h2>
   <h4>Thanks</h4>

   <button onClick={props.displayMessage}>Submit</button>

    </div>
  );
};
export default Display;
