import React from 'react'
import { fields, options, validation } from './schema'
import { useForm, FormContext, AutoForm } from '@star-js/form'
import { ThemeProvider } from 'emotion-theming'
import { theme, Flex, Box, Button } from '@chakra-ui/core'

const App = () => {
  // 1: Initialize form with hook
  const autoForm = useForm({
    isEditing: true,
    fields,
    validation,
    values: {}
  })

  const { form } = autoForm

  const save = async (form) => {
    // save data, for example
    // await fetch(`save_url`, {body: JSON.stringify(form) });
    console.log(' form ', form)
  }

  return (
    <ThemeProvider theme={theme}>
      <FormContext.Provider value={autoForm}>
        <Flex p={5}>
          <Box>
            <AutoForm fields={fields} options={options} />
            <Button onClick={save}>Submit</Button>
            <pre>{JSON.stringify(form)}</pre>
          </Box>
        </Flex>
      </FormContext.Provider>
    </ThemeProvider>
  )
}

export default App
