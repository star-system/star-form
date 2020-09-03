export const fields = [
  {
    name: 'breakfast',
    label: 'What do you want for breakfast',
    required: true
  },
  {
    name: 'bacon',
    type: 'select',
    label: 'Do you want bacon with that?',
    optionsKey: 'yes_no_option'
  },
  {
    name: 'eggs',
    label: 'How many eggs?',
    validation: 'positive'
  }
  // {
  //   name: 'eggs2',
  //   fields: [
  //     {
  //       name: 'quantity'
  //     },
  //     {
  //       name: 'scrambled',
  //       type: 'select',
  //       optionsKey: 'yes_no_option'
  //     }
  //   ]
  // }
]

export const options = {
  yes_no_option: [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' }
  ]
}

export const validation = {
  positive: [(val) => !isNaN(val) && Number(val) >= 0, 'A positive number']
}
