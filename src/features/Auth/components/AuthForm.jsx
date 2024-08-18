import { FormikInput } from '@components';
import { Form, Formik } from 'formik';
import { Button } from 'react-daisyui';
import { toast } from 'react-toastify';
import { loginValidation, signupValidation } from '../validation.js';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  toast.success('Form submitted successfully');
  actions.resetForm();
};

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
    <Formik {...loginFormik}>
      {({ isSubmitting }) => (
        <Form
          autoComplete='off'
          autoFocus={true}
          className='flex flex-col gap-8'
        >
          <FormikInput
            label='Enter your email'
            name='email'
            type='email'
          />
          <FormikInput
            label='Enter your password'
            name='password'
            type='password'
          />

          <Button
            variant='outline'
            color='primary'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Loading...' : 'Log In'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const signupFormik = {
  initialValues: {
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  },
  validationSchema: signupValidation,
  onSubmit: onSubmit,
};
export const SignupForm = () => {
  return (
    <Formik {...signupFormik}>
      {({ isSubmitting }) => (
        <Form
          autoComplete='off'
          className='flex flex-col gap-8'
        >
          <FormikInput
            label='Username'
            name='username'
            type='text'
          />
          <FormikInput
            label='Email Address'
            name='email'
            type='email'
          />
          <FormikInput
            label='Enter Password'
            name='password'
            type='password'
          />
          <FormikInput
            label='Confirm Password'
            name='confirm_password'
            type='password'
          />

          <Button
            variant='outline'
            color='primary'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Loading...' : 'Sign Up'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
