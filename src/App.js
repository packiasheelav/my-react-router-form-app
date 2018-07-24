import React, { Component } from "react";
import "./component/Style.css";
import FooterComponent from "./component/FooterComponent";
import NavBarComponent from "./component/NavBarComponent";
import Header from "./component/HeaderComponent";

class App extends Component {
  state = {
    nameValue: "",
    emailValue: "",
    reEnterEmailValue: "",
    phoneNoValue: "",
    address1Value: "",
    address2Value: "",
    cityValue: "",
    stateValue: "",
    countryValue: "",
    zipValue: "",
    howDidYouHear: "",
    portfolioLink: "",
    additionalLink: "",
    discipline:[],
    interestedPlace:[],
    primaryDiscipline:"",
    username:"",
    password:"",
    errorforLogin:"",
   
   isTouched:{
     nameValue:false,
     phoneNoValue:false,
     emailValue:false,
     reEnterEmailValue:false,
     address1Value:false,
     address2Value:false,
     cityValue:false,
     stateValue:false,
     countryValue:false,
     zipValue:false,
     portfolioLink:false,
     additionalLink:false,
     username:false,
     password:false
   }
  };

  handleUpdate = e => {
    console.log('inside handleUpdate')
    e !== undefined && e.target.type !== "checkbox"
      ? this.setState({ [e.target.name]: e.target.value })
      : this.setState({
          [e.target.name]: !this.state[e.target.name].includes(e.target.value)
            ? [...this.state[e.target.name]].concat(e.target.value)
            : [...this.state[e.target.name]].filter(
                item => item !== e.target.value
              )
        });
  };
  
  handleChange = (e) => {
    const field=e.target.name;
    this.setState(prevState=>({
      isTouched: { ...prevState.isTouched, [field]: true }
    })
  )}

  handleSubmit(e) {
    e.preventDefault();
   }

   handleLoginSubmit(e) {
    e.preventDefault();
  console.log('inside handlesubmit');

  }
  displayMessage(){
    
    alert('your are submitting the form');
  }

  validate = (nameValue, emailValue, reEnterEmailValue,phoneNoValue,address1Value,address2Value,cityValue,stateValue,countryValue,zipValue,howDidYouHear,portfolioLink,additionalLink,username,password,primaryDiscipline) => {
		const errors = {

			 nameValue: /^[a-zA-Z]+$/.test(nameValue) ? '' : 'you can have only alphabetic characters',
        
        emailValue: /^[a-zA-Z]+$/.test(emailValue) ? '': 'you can have only alphabetic characters',
        
        reEnterEmailValue: emailValue=reEnterEmailValue	? '' : 'an invalid email address',

        phoneNoValue:  /^[0-9]+$/.test(phoneNoValue) ? '': 'you can have only numbers',

        address1Value: /^[a-zA-Z]+$/.test(address1Value) ? '': 'you can have only alphabetic characters',

        address2Value: /^[a-zA-Z]+$/.test(address2Value) ? '' : 'you can have only alphabetic characters',

        cityValue: /^[a-zA-Z]+$/.test(cityValue) ? '' : 'you can have only alphabetic characters',

        stateValue: /^[a-zA-Z]+$/.test(stateValue) ? '': 'you can have only alphabetic characters',

        countryValue: /^[a-zA-Z]+$/.test(countryValue) ? '' : 'you can have only alphabetic characters',

        zipValue: /^[0-9]+$/.test(zipValue) ? '' : 'you can have only alphabetic characters',

        howDidYouHear: /^[a-zA-Z]+$/.test(howDidYouHear) ? '': 'you can have only alphabetic characters',

        portfolioLink: /^[a-zA-Z]+$/.test(portfolioLink) ? '': 'you can have only alphabetic characters',

        additionalLink: /^[a-zA-Z]+$/.test(additionalLink) ? '' : 'you can have only alphabetic characters',

        //discipline: this.state.discipline.length ? '' : 'pick at least one option',
        
        interestedPlace: this.state.interestedPlace.length ? '' : 'Pick atleast one place you are interested in ',

        primaryDiscipline:this.state.primaryDiscipline.length ? '' :'pick one option',

        username: /^[a-zA-Z]+$/.test(username) ? '' :'give the user name',

        password: /^[a-zA-Z]+$/.test(password) ? '' : 'password please'
    };
		return errors;
	};

  render() {
    const { nameValue, emailValue, reEnterEmailValue,phoneNoValue,address1Value,address2Value,cityValue,stateValue,countryValue,zipValue,howDidYouHear,portfolioLink,primaryDiscipline,additionalLink ,discipline,interestedPlace,username,password} = this.state;
    const errors = this.validate(nameValue, emailValue, reEnterEmailValue,phoneNoValue,address1Value,address2Value,cityValue,stateValue,countryValue,zipValue,howDidYouHear,primaryDiscipline, portfolioLink,additionalLink,interestedPlace, discipline,username,password);
    console.log(errors);
   
    return (
      <div>
        <Header />
        <NavBarComponent data={this.state} change={this.handleUpdate} validate={errors} handleBlurEvent={this.handleChange} handleCheckBox={this.handleCheck} handleSubmit={this.handleLoginSubmit} displayMessage={this.displayMessage}/>
        
        <FooterComponent />
      </div>
      
    );
  }
}

export default App;
