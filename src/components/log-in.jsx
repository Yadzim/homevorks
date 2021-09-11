import React, { Component } from 'react'
import Input from './forms/input';

export default class LogIn extends Component {
  state = {
    account: {email: "", password: ""},
    errors: {email: "", password: ""},
  };
  validateProparty = ({value, name=""}) => {
    const {errors} = this.state;
    if(value.trim() === ''){
      errors[name] = name + "is requared";
    } else delete errors[name];
    this.setState({errors});
  }
  validate = () => {
    const {email, password} = this.state.account;
    const errors = {};
    if(email.trim() === ""){
      errors.email = "email is requared"
    }
    if(password.trim() === ""){
      errors.password = "password is requared"
    }

    return Object.keys(errors).length < 1 ? null : errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if(!errors) return console.log("Submited👍");
    this.setState({errors});
  };
  handleChange = (e) => {
    this.validateProparty(e.currentTarget)
    this.setState(({account}) => ({ account: {...account, [e.target.name]: e.target.value} }));
  };

  render() {
    const { email, password } = this.state.account;
    const {errors} = this.state;
    return (
      <div className="register-box">
        <h1>Log in</h1>
        <form onSubmit={this.handleSubmit}>
          <Input label='Email' value={email} onChange={this.handleChange} name='email' error={errors.email}/>
          <Input label='Password' value={password} onChange={this.handleChange} name='password' error={errors.password
          } />
          <div className='d-flex justify-content-end'>
            <button type='submit' className='btn btn-primary mt-4'>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
