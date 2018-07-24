import React from 'react';

const home=(props)=>{
    return(
        <div className={props.validate.username && props.data.isTouched.username ? 'invalid' : ''} >
        <h1>Welcome to Form Registration </h1>
        <h2>let's start</h2>
        <form className='loginPage' onSubmit={props.handleSubmit} >
        <h3>Please login to proceed</h3>
        <div>
        <label className='labelforLogin'>User Name</label>
        <input className='userName' 
        type='text' 
        placeholder='Enter User name' 
        name='username'  
        value={props.data.username} 
        onChange={props.change}
        onBlur={props.handleBlurEvent}
        />
        {props.data.isTouched.username && props.validate.username && (<span className="err-msg">{props.validate.username} </span>
					)}
        </div>

<div>
        <label className='labelforLogin'>Password</label>
        <input className='password ' 
        type='text'
         placeholder='Enter password'
         name='password'
         value={props.data.password}
         onChange={props.change}
         onBlur={props.handleBlurEvent}
         />
           {props.data.isTouched.password &&
					props.validate.password && (
						<span className="err-msg">{props.validate.password} </span>
                    )}
                    </div>

         
        <button className='loginButton' type='submit'  >Login</button>
        </form> 
        </div>
    )
}
export default home;