import React from 'react'
import { fields, options, validation } from './schema'
import {
  useForm,
  FormContext,
  AutoForm,
  htmlComponentMap,
  // materialUiComponentMap,
  // chakraComponentMap
} from '@star-js/form'
import antdComponentMap from '@star-js/form-antd'
// import chakraComponentMap from '@star-js/form-chakra-ui'
// import { ThemeProvider } from 'emotion-theming'
// import { theme, Flex, Box, Button } from '@chakra-ui/core'
import { SaveButton } from './SaveButton'

import 'antd/dist/antd.css'

const App = () => {
  // 1: Initialize form with hook
  const autoForm = useForm({
    isEditing: true,
    fields,
    validation,
    values: {},
    optionsMap: options,
    controlMap: htmlComponentMap,
  })

  // const { form } = autoForm

  const save = async (form) => {
    // save data, for example
    // await fetch(`save_url`, {body: JSON.stringify(form) });
    console.log('SAVE form ', form)
  }

  // return (
  //   <ThemeProvider theme={theme}>
  //     <FormContext.Provider value={autoForm}>
  //       <Flex p={5}>
  //         <Box>
  //           <AutoForm fields={fields} options={options} />
  //           <SaveButton onSave={save} />
  //           {/*<Button onClick={save}>Submit</Button>*/}
  //           <pre>{JSON.stringify(autoForm.form)}</pre>
  //         </Box>
  //       </Flex>
  //     </FormContext.Provider>
  //   </ThemeProvider>
  // )

  return (
    <div>
      <FormContext.Provider value={autoForm}>
        <AutoForm fields={fields} options={options} />
        {/*<SaveButton onSave={save} />*/}
        {/*<Button onClick={save}>Submit</Button>*/}
        <pre>{JSON.stringify(autoForm.form)}</pre>
      </FormContext.Provider>
    </div>
  )
}

export default App
