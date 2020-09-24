import React from 'react'
import { FormContext, useForm } from '../index'

export default function FormProvider({
  isEditing = false,
  fields = [],
  values = [],
  ...props
}) {
  const value = useForm({ isEditing, fields, values })
  return (
    <FormContext.Provider value={value}>{props.children}</FormContext.Provider>
  )
}
