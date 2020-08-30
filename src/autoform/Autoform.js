import React from 'react'
import { Box } from '@chakra-ui/core'

function BoxFieldComponent() {
  return (<Box>Test</Box>)
}

function AutoForm({fields, fieldComponent}) {
  return (
    <div>
      {fields.map((field) => {
        const Comp = fieldComponent || BoxFieldComponent;
        return (<Comp field={field} />)
      })}
    </div>
  )
}

export default AutoForm
