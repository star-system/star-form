export const fields = [
  {
    name: "requiredTextField",
    label: "Required Text Field",
    required: true,
  },
  {
    name: "bacon",
    label: "Do you like bacon?",
    optionsKey: "yes_no_option",
  },
]

export const options = {
  yes_no_option: [
    { value: "yes", label: "Yes Label" },
    { value: "no", label: "No Label" },
  ],
}
