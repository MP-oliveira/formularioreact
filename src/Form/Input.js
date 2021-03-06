import React from 'react'

const Input = ({ id, label, value, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </>
  )
}

export default Input