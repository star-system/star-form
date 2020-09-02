import React from 'react'
import { Input, Select, Text } from '@chakra-ui/core'

export const ChakraSelectControl = ({ value, onChange, optionItems }) => {
  return (
    <Select
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
    </Select>
  )
}

export const ChakraErrorMsg = ({ children }) => {
  return <Text color='red.500'>{children}</Text>
}

export const ChakraDisplayValue = ({ children }) => {
  return <Text my={2}>{children}</Text>
}

export default {
  displayValue: ChakraDisplayValue,
  errorMsg: ChakraErrorMsg,
  input: Input,
  select: ChakraSelectControl
}
