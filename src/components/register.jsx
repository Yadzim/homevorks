import React, { Component } from 'react';
import Input from './forms/input';

export default class SignUp extends Component {
  state = {
    account: { firstName: "", lastName: "", email: "", password: "" },
    errors: { firstName: "", lastName: "", email: "", password: "" },
  };

  validateProparty = ({value, name=""}) => {
    const {errors} = this.state;
    if(value.trim() === ''){
      errors[name] = name + " is requared";
    } else delete errors[name];
    this.setState({errors});
  };
  validate = () => {
    const { firstName, lastName, email, password} = this.state.account;
    const errors = {};
    if(firstName.trim() === ""){
      errors.firstName = "First name is requared"
    }
    if(lastName.trim() === ""){
      errors.lastName = "Last name is requared"
    }
    if(email.trim() === ""){
      errors.email = "Email is requared"
    }
    if(password.trim() === ""){
      errors.password = "Password is requared"
    }

    this.setState({errors});
    return Object.keys(errors).length < 1 ? null : errors;
  };
  handleSubmit = (e) => {
    const errors = this.validate();
    if(!errors){
      console.log("Submited👍");
    } else{
      console.log(`error`, errors);
    }

    e.preventDefault();
  };
  handleChange = (e) => {
    this.validateProparty(e.currentTarget)
    this.setState(({account}) => ({ account: {...account, [e.target.name]: e.target.value} }));
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
    const {errors} = this.state;
    return (
      <div className="register-box">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <Input label='First name' value={firstName} onChange={this.handleChange} name='firstName' error={errors.firstName}/>
          <Input label='Last name' value={lastName} onChange={this.handleChange} name='lastName' error={errors.lastName}/>
          <Input label='Email' value={email} onChange={this.handleChange} name='email' error={errors.email}/>
          <Input label='Password' value={password} onChange={this.handleChange} name='password' error={errors.password}/>
          <div className='d-flex justify-content-end'>
            <button type='submit' className='btn btn-primary mt-4'>
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
