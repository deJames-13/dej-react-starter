import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const signupValidation = yup.object().shape({
  username: yup.string().min(3, 'Username must be at least 3 characters long').required('*Required'),

  email: yup.string().email('Please enter a valid email').required('*Required'),

  password: yup
    .string()
    .min(8, 'Password must be atleast 8 characters long.')
    .matches(passwordRules, { message: 'Please create a stronger password' })
    .required('*Required'),

  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('*Required'),
});
export const loginValidation = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('*Required'),
  password: yup.string().required('*Required'),
});
