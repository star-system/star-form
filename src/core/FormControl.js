import React from 'react'
import { Input, Select, Text } from '@chakra-ui/core'
import { useFormContext } from './FormContext'

export const FormControl = ({
  item,
  // value,
  options,
  onChangeValue
}) =>
  // :{
  // item: { name: string; optionsKey?: string; validation?: any };
  // options?: { [key: string]: { label: string; value: string }[] };
  // onChangeValue?: any;
  // }
  {
    // @ts-ignore
    // const { formState, formDispatch } = useEditSaveCancelContext();
    const {
      // @ts-ignore
      form,
      // @ts-ignore
      setForm,
      // @ts-ignore
      validation,
      // @ts-ignore
      errors,
      // @ts-ignore
      setErrors
    } = useFormContext()

    const onChangeImpl = (e) => {
      // console.log({ ...form, [item.name]: e.target.value });
      setForm({ ...form, [item.name]: e.target.value })
      // formDispatch({ type: 'SET_VALUE', name: item.name, value: e.target.value });
      // @ts-ignore
      const failRequiredValidation = item.required && !e.target.value
      const failValidation =
        validation[item.validation] &&
        !validation[item.validation][0](e.target.value)
      if (failRequiredValidation || failValidation) {
        const failValidationMsg = failValidation
          ? validation[item.validation][1]
          : ''
        const failRequiredValidationMsg = failRequiredValidation
          ? '(required)'
          : ''
        setErrors({
          ...errors,
          [item.name]: `${failValidationMsg} ${failRequiredValidationMsg}`
        })
        console.log('failed validation')
      } else {
        // ts
        // setErrors((oldErrors: { [x: string]: any; }) => {
        setErrors((oldErrors) => {
          delete oldErrors[item.name]
          return oldErrors
        })
      }
      onChangeValue && onChangeValue(e.target.value)
    }

    // @ts-ignore
    const { editing } = useFormContext()
    return editing ? (
      <div>
        {item.optionsKey ? (
          <Select
            // key={item.name}
            placeholder='Select...'
            onChange={onChangeImpl}
            value={form[item.name]}
          >
            {options &&
              options[item.optionsKey] &&
              options[item.optionsKey].map((option) => {
                const label = option.label || option.value
                return (
                  <option value={option.value} key={option.value}>
                    {label}
                  </option>
                )
              })}
          </Select>
        ) : (
          <Input
            // key={item.name}
            // placeholder={value}
            onChange={onChangeImpl}
            value={form[item.name]}
            // name={item.name}
            // ref={register({ required: true })}
          />
        )}
        <Text color='red.500'>{errors[item.name]}</Text>
      </div>
    ) : (
      <Text my={2}>
        {item.optionsKey // && options && options[item.optionsKey]
          ? options &&
            options[item.optionsKey].find(
              (opt) => opt.value === form[item.name]
            )?.label
          : form[item.name]}
      </Text>
    )
  }
