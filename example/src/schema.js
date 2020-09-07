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
    name: 'egg_count',
    label: 'How many eggs?',
    validation: 'positive'
  },
  {
    name: 'egg_type',
    type: 'radioGroup',
    label: 'How do you like your eggs?',
    optionsKey: 'eggTypes'
  },
  {
    name: 'egg_type2',
    type: 'checkboxGroup',
    label: 'How do you like your eggs 2?',
    optionsKey: 'eggTypes'
  },

  {
    name: 'eggs3',
    fields: [
      {
        name: 'quantity'
      },
      {
        name: 'scrambled',
        type: 'select',
        optionsKey: 'yes_no_option'
      }
    ]
  }
]

export const options = {
  yes_no_option: [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' }
  ],
  eggTypes: [
    { value: 'S', label: 'Scrambled' },
    { value: 'SSU', label: 'Sunny Side Up' },
    { value: 'OE', label: 'Over Easy' }
  ]
}

export const validation = {
  positive: [(val) => !isNaN(val) && Number(val) >= 0, 'A positive number']
}
