import React from 'react'
import { fields, options } from './schema'
import { useForm, FormContext, AutoForm } from '@star-js/form'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '@chakra-ui/core'

const App = () => {
  // 1: Initialize form with hook
  const autoForm = useForm({
    isEditing: true,
    fields
    // values,
  })

  // 2: schema for autoform
  //   const schema = {
  //     fields,
  //     options,
  //   };

  const save = async (form) => {
    //save data
    // const { form } = autoForm;
    // await fetch(`save_url`, {body: JSON.stringify(form) });

    console.log(' form ', form)
  }

  return (
    <ThemeProvider theme={theme}>
      <FormContext.Provider value={autoForm}>
        <AutoForm fields={fields} options={options} />
        {/*<AutoFormButtons.SaveButton onSave={save}/>*/}
      </FormContext.Provider>
    </ThemeProvider>
  )
}

export default App
