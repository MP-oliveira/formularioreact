import React from 'react'

const Select = ({options}) => {
  return (
    <select>
      <option value='' disabled selected>Selecione</option>
      {options.map(option => <option key={option} value>{option}</option>)}
    </select>
  )
}

export default Select