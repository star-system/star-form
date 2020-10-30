import React from 'react'
import { FormControl } from '@star-js/form'
import './style.module.css'

export const SelectControl = ({ value, onChange, optionItems }) => {
  return (
    <select
      // key={item.name}
      placeholder='Select...'
      onChange={onChange}
      value={value}
    >
      {optionItems.map((option) => {
        const label = option.label || option.value
        return (
          <option value={option.value} key={option.value}>
            {label}
          </option>
        )
      })}
    </select>
  )
}

function FieldComponent({ field, options, children }) {
  return (
    <div className='starField'>
      <div>
        {/*{requiredMarker}*/}
        {field.label || field.name}:
      </div>
      {/*{children}*/}
      <FormControl item={field} options={options} />
    </div>
  )
}

export const HtmlInput = (props) => {
  return <input {...props}></input>
}

export const ErrorMsg = ({ children }) => {
  return <div>{children}</div>
}

export const DisplayValue = ({ children }) => {
  return <div>{children}</div>
}

export default {
  field: FieldComponent,
  displayValue: DisplayValue,
  errorMsg: ErrorMsg,
  input: HtmlInput,
  select: SelectControl,
  radioGroup: DisplayValue,
  checkboxGroup: DisplayValue,
}
