import React, { Component } from 'react'
import Input from './forms/input'

export default class AddFood extends Component {
  state = {
    account: {title: "", category: "", price: "", amount: "", type: ""},
    errors: {title: "", category: "", price: "", amount: "", type: ""},
  };
  validateProparty = ({value, name = ""}) => {
    const errors = this.state;
    if(value.trim() === ""){
      errors[name] = name + " is required";
     } else delete errors[name];

    this.setState({errors});
  }
  validate = () => {
    const {title, category, price, amount, type } = this.state.account;
    const errors = {};

    if(title.trim() === ""){
      errors.title = "Title is requared"
    }
    if(category.trim() === ""){
      errors.category = "Category is requared"
    }
    if(price.trim() === ""){
      errors.price = "Price is requared"
    }
    if(amount.trim() === ""){
      errors.amount = "Amount is requared"
    }
    if(type.trim() === ""){
      errors.type = "Type is requared"
    }

    return Object.keys(errors).length < 1 ? null : errors;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if(!errors) return console.log("Submited👍");
    this.setState({errors});
  }
  handleChange = (e) => {
    this.validateProparty(e.currentTarget);
    this.setState(({account}) => ({account: {...account, [e.target.name]: e.target.value }}));
  }

  render() {
    const { title, category, price, amount, type } = this.state.account;
    const {errors} = this.state;
    return (
      <div className="register-box">
        <h1>Add food</h1>
        <form onSubmit={this.handleSubmit}>
          <Input label='Title' value={title} onChange={this.handleChange} name='title' error={errors.title}/>
          <Input label='Category' value={category} onChange={this.handleChange} name='category' error={errors.category} />
          <Input label='Price' value={price} onChange={this.handleChange} name='price' error={errors.price} />
          <Input label='Amount' value={amount} onChange={this.handleChange} name='amount' error={errors.amount} />
          <Input label='Type' value={type} onChange={this.handleChange} name='type' error={errors.type} />
          <div className='d-flex justify-content-end'>
            <button type='submit' className='btn btn-primary mt-4'>
              Add food
            </button>
          </div>
        </form>
      </div>
    )
  }
}
