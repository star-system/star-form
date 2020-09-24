import React from 'react'
import { fields, options, validation } from './schema'
import {
  useForm,
  FormContext,
  AutoForm,
  chakraComponentMap
} from '@star-js/form'
import { ThemeProvider } from 'emotion-theming'
import { theme, Flex, Box, Button } from '@chakra-ui/core'
import { SaveButton } from './SaveButton'

const App = () => {
  // 1: Initialize form with hook
  const autoForm = useForm({
    isEditing: true,
    fields,
    validation,
    values: {},
    optionsMap: options,
    controlMap: chakraComponentMap
  })

  // const { form } = autoForm

  const save = async (form) => {
    // save data, for example
    // await fetch(`save_url`, {body: JSON.stringify(form) });
    console.log('SAVE form ', form)
  }

  return (
    <ThemeProvider theme={theme}>
      <FormContext.Provider value={autoForm}>
        <Flex p={5}>
          <Box>
            <AutoForm fields={fields} options={options} />
            <SaveButton onSave={save} />
            {/*<Button onClick={save}>Submit</Button>*/}
            <pre>{JSON.stringify(autoForm.form)}</pre>
          </Box>
        </Flex>
      </FormContext.Provider>
    </ThemeProvider>
  )
}

export default App
