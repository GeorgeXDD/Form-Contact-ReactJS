/*

import React, {useState} from 'react';
import logo from './logo.png';
import './style.css';
function RegistrationForm() {

}
export default RegistrationForm;



import React from 'react';
import {useState} from 'react';
import logo from './logo.png';
import './style.css';

const Form = () => {

    const [firstname, setFirstname] = useState([]);
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    function onChangeFirstname(e) {
      setFirstname(e.target.value)
    }
    function onChangeLastname(e) {
        setLastname(e.target.value)
    }
    function onChangeEmail(e) {
        setEmail(e.target.value)
    }

    function onSubmit() {
      localStorage.setItem('firstname', firstname);
      localStorage.setItem('lastname', lastname);
      localStorage.setItem('email', email);
  }    

  function getData() {
    
  }

  return (
    <div id="cent" class="card">
      <img class="card-img-top centimg" src={logo}></img>
      <div className="form" class="card-body card-color">
        <form id="formID" onSubmit={onSubmit}>
          <div className="form-body">
            <div className="firstname" class="form-group">
              <label className="form__label" for="firstName">
                First Name
              </label>
              <input
                className="form__input"
                type="text"
                value={firstname}
                onChange={onChangeFirstname}
                id="firstName"
                class="form-control required1"
                placeholder="First Name"
                required
              />
            </div>
            <div className="lastname" class="form-group">
              <label className="form__label" for="lastName">
                Last Name
              </label>
              <input
                className="form__input"
                type="text"
                value={lastname}
                onChange={onChangeLastname}
                id="lastName"
                class="form-control required1"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="email" class="form-group">
              <label className="form__label" for="email">
                Email adress
              </label>
              <input
                className="form__input"
                type="email"
                value={email}
                onChange={onChangeEmail}
                id="email"
                class="form-control required1"
                placeholder="Email"
                required
              />
            </div>
            <div className="country" class="form-group">
              <label for="country">Country</label>
              <select class="form-control" id="country">
                <option disabled hidden selected>
                  Select One
                </option>
                <option>Roumania</option>
                <option>Hungary</option>
                <option>America</option>
              </select>
            </div>
          </div>
        </form>

        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-primary" onClick={getData} form="formID">
            Submit
          </button>
        </div>
      </div>
    </div>
  );  
}
export default Form;

*/