import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('A name is required for the order')
    .min(2, 'name must be at least 2 characters'),
  size: yup
    .string()
    .required('Please select a pizza size!'),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  olives: yup.boolean(),
  special: yup.boolean(),
  instructions: yup.string().trim()
});

export default formSchema;