import React, { useEffect } from 'react'
import defaultComponentMap from '../control-maps/defaultComponentMap'

//ts
// const attributeArrayToFormObject = (array: []) => {
//   return array.reduce((obj: any, item: any) => {
//     // eslint-disable-line no-param-reassign
//     obj[item.name] = item.defaultValue
//     return obj
//   }, {})
// }

const attributeArrayToFormObject = (array) => {
  return array.reduce((obj, item) => {
    // eslint-disable-line no-param-reassign
    obj[item.name] = item.defaultValue
    return obj
  }, {})
}

export function useForm({
  isEditing = false,
  fields = [],
  values = {},
  validation = {},
  controlMap = defaultComponentMap
}) {
  console.log('useForm init')
  const initFormObj = attributeArrayToFormObject(fields)
  const [editing, setEditingState] = React.useState(isEditing)
  const [form, setForm] = React.useState(initFormObj)
  const [oldForm, setOldForm] = React.useState(initFormObj)
  const [errors, setErrors] = React.useState({})

  useEffect(() => {
    console.log('--- useEffect 1 values', values)
    const newForm = Object.keys(form).reduce((obj, item) => {
      obj[item] = values && values[item] // || form[item];
      return obj
    }, {})
    console.log('--- useEffect 2 newForm', JSON.stringify(newForm))
    if (JSON.stringify(newForm) !== JSON.stringify(form)) {
      // console.log('--- useEffect 3 newForm', newForm);
      setOldForm(newForm)
      setForm(newForm)
    }
  }, [])

  const setEditing = React.useCallback((newVal) => setEditingState(newVal), [])
  const setSingleValue = (key, newVal) => {
    setForm({ ...form, [key]: newVal })
  }

  // const onSave = React.useCallback(() => props.onSave(), []);
  const value = React.useMemo(
    () => ({
      editing,
      setEditing,
      // onSave,
      form,
      setForm,
      validation,
      errors,
      setErrors,
      oldForm,
      resetForm: () => setForm(oldForm),
      setSingleValue,
      controlMap
    }),
    [editing, form]
  )
  return value
}
