import React from 'react'
import { Box } from '@chakra-ui/core'
import { FormControl } from '..'

// export const getLabel = (item) => {
//   const words =
//     item.label ||
//     item.name
//       .split(/(?=[A-Z])/)
//       .map(capitalizeFirstLetter)
//       .join(' ')
//   return words
// }

function BoxFieldComponent({ field, options }) {
  return (
    <Box>
      <Box fontWeight='medium' my={2}>
        {/*{requiredMarker}*/}
        {field.label || field.name}:
      </Box>
      <FormControl item={field} options={options} />
    </Box>
  )
}

function AutoForm({ fields, fieldComponent, options }) {
  return (
    <div>
      TESTSETESTETSETSET
      {fields.map((field) => {
        const Comp = fieldComponent || BoxFieldComponent
        return <Comp key={field.name} field={field} options={options} />
      })}
    </div>
  )
}

export default AutoForm
