import React from 'react'

export default function Input({label, name, error, ...args}) {
  return (
    <div className='form-group my-3'>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={name}
        id={name}
        {...args}
        className='form-control'
      />
      {error && <div className="alert alert-danger" role="alert">
        {error}
      </div>}
    </div>
  )
}
