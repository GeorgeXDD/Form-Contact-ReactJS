import React, { Component } from 'react';
import {useState} from 'react';
import logo from './logo.png';
import './style.css';

export default class Form extends Component {
  userData;

  constructor(props) {
      super(props);

      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeLastname = this.onChangeLastname.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          name: '',
          email: '',
          lastname: ''
      }
  }

  onChangeName(e) {
      this.setState({ name: e.target.value })
  }

  onChangeLastname(e) {
    this.setState({ lastname: e.target.value })
  }
  onChangeEmail(e) {
      this.setState({ email: e.target.value })
  }

  componentDidMount() {
      this.userData = JSON.parse(localStorage.getItem('user'));

      if (localStorage.getItem('user')) {
          this.setState({
              name: this.userData.name,
              email: this.userData.email,
              lastname: this.userData.lastname
          })
      } else {
          this.setState({
              name: '',
              email: '',
              lastname: ''
          })
      }
  }

  componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('user', JSON.stringify(nextState));
  }

  onSubmit() {

      console.log(this.state.props)
  }
  render(){
  return (
    <div id="cent" class="card">
      <img class="card-img-top centimg" src={logo}></img>
      <div className="form" class="card-body card-color">
        <form id="formID" onSubmit={this.onSubmit}>
          <div className="form-body">
            <div className="firstname" class="form-group">
              <label className="form__label" for="firstName">
                First Name
              </label>
              <input
                className="form__input"
                type="text"
                value={this.state.name}
                onChange={this.onChangeName}
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
                value={this.state.lastname}
                onChange={this.onChangeLastname}
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
                value={this.state.email}
                onChange={this.onChangeEmail}
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
          <button type="submit" class="btn btn-primary" form="formID">
            Submit
          </button>
        </div>
      </div>
    </div>
  );  
}
}