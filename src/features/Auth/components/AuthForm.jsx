import { FormikForm } from '@components';
import { Button } from 'react-daisyui';
import { toast } from 'react-toastify';
import { loginValidation, signupValidation } from '../auth.validation.jss';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  toast.success('Form submitted successfully');
  actions.resetForm();
};

const loginSchema = [
  { label: 'Email Address', name: 'email', type: 'email' },
  { label: 'Enter Password', name: 'password', type: 'password' },
];
const loginFormik = {
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema: loginValidation,
  onSubmit: onSubmit,
};

export const LoginForm = () => {
  return (
    <FormikForm
      formikProps={loginFormik}
      formSchema={loginSchema}
      element={({ isSubmitting }) => {
        return (
          <Button
            variant="outline"
            color="primary"
            disabled={isSubmitting}
          >
            Log In
          </Button>
        );
      }}
    />
  );
};

const signupSchema = [
  { label: 'Username', name: 'username', type: 'text' },
  { label: 'Email Address', name: 'email', type: 'email' },
  { label: 'Enter Password', name: 'password', type: 'password' },
  { label: 'Confirm Password', name: 'confirm_password', type: 'password' },
];
const signupFormik = {
  initialValues: signupSchema.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {}),
  validationSchema: signupValidation,
  onSubmit: onSubmit,
};
export const SignupForm = () => {
  return (
    <FormikForm
      formikProps={signupFormik}
      formSchema={signupSchema}
      element={({ isSubmitting }) => {
        return (
          <Button
            variant="outline"
            color="primary"
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
        );
      }}
    />
  );
};
