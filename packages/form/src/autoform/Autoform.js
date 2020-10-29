import React from 'react'
import { useFormContext } from '../index'

// export const getLabel = (item) => {
//   const words =
//     item.label ||
//     item.name
//       .split(/(?=[A-Z])/)
//       .map(capitalizeFirstLetter)
//       .join(' ')
//   return words
// }

// function BoxFieldComponent({ field, options }) {
//   return (
//     <Box>
//       <Box fontWeight='medium' my={2}>
//         {/*{requiredMarker}*/}
//         {field.label || field.name}:
//       </Box>
//       <FormControl item={field} options={options} />
//     </Box>
//   )
// }
//
// function AutoForm({ fields, fieldComponent, options }) {
//   return (
//     <div>
//       {fields.map((field) => {
//         const Comp = fieldComponent || BoxFieldComponent
//         return <Comp key={field.name} field={field} options={options} />
//       })}
//     </div>
//   )
// }

function AutoForm({ fields }) {
  const { optionsMap, controlMap } = useFormContext()
  return (
    <div>
      {fields.map((field) => {
        const Comp = controlMap.field
        return <Comp key={field.name} field={field} options={optionsMap} />
      })}
    </div>
  )
}

export default AutoForm
