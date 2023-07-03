import React,{useState, useRef} from "react";


function UserForm(props){
    let fnameRef=useRef();
    let lnameRef=useRef();
    let emailRef=useRef();
    let pswdRef=useRef();
    let countryRef=useRef();
    let cityRef=useRef();
    let dateRef=useRef();
    
    function onCreateUserEvent(event){
        event.preventDefault();
        let user={
            firstName : fnameRef.current.value,
            lastName : lnameRef.current.value,
            eMail : emailRef.current.value,
            Password : pswdRef.current.value,
            Country : countryRef.current.value,
            City : cityRef.current.value,
            Dob : dateRef.current.value,
        }
        props.onCreateUser(user);
    }

    return(<div >
            <div onClick={props.hideform}>&times;</div>
            <h3>Create New User</h3>
      <div>
        <form onSubmit={onCreateUserEvent}>
            <div>
                <input type="text" placeholder="First Name" ref={fnameRef}/>
                <input type="text" placeholder="Last Name" ref={lnameRef}/>
            </div>
            <div>
                <input type="email" placeholder="Email" ref={emailRef}/>
            </div>
            <div>
                <input type="password" placeholder="Password" ref={pswdRef}/>
                <input type="password" placeholder="Confirm Password" />
            </div>
            <div>
                <select name="country" ref={countryRef}> 
                    <option value="India">India</option>
                    <option value="Germany">Germany</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
                <select name="city" ref={cityRef}>
                    <option value="Delhi">Delhi</option>
                    <option value="Berlin">Berlin</option>
                    <option value="New York">New York</option>
                    <option value="London">London</option>
                </select>
            </div>
            <div>
                <input type="date" ref={dateRef}/>
            </div>
            <div>
            <select name="Gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div>
                <button type="submit">Create User</button>
            </div>
    </form>
  </div>
</div>

    )
}

export default UserForm;