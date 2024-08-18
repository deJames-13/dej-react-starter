import { FormikInput } from '@components';
import { Form, Formik } from 'formik';
import { Button, Card } from 'react-daisyui';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const validation = yup.object().shape({
	username: yup.string().min(3, 'Username must be at least 3 characters long').required('Required'),

	email: yup.string().email('Please enter a valid email').required('Required'),

	password: yup.string().min(8, 'Password must be atleast 8 characters long.').matches(passwordRules, { message: 'Please create a stronger password' }).required('Required'),

	confirm_password: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Required'),
});

const onSubmit = async (values, actions) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	actions.resetForm();
};

const formikProps = {
	initialValues: {
		username: '',
		email: '',
		password: '',
		confirm_password: '',
	},
	validationSchema: validation,
	onSubmit: onSubmit,
};

function AuthSignup() {
	return (
		<>
			<div className='text-center lg:text-left'>
				<h1 className='text-5xl font-bold'>Sign up now!</h1>
				<p className='py-6'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
			</div>
			<Card className='flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
				<Card.Body>
					<Formik {...formikProps}>
						{({ isSubmitting }) => (
							<Form autoComplete='off' className='flex flex-col gap-8'>
								<FormikInput label='Username' name='username' type='text' />
								<FormikInput label='Email Address' name='email' type='email' />
								<FormikInput label='Enter Password' name='password' type='password' />
								<FormikInput label='Confirm Password' name='confirm_password' type='password' />

								<Button variant='outline' color='primary' disabled={isSubmitting}>
									{isSubmitting ? 'Loading...' : 'Sign Up'}
								</Button>
							</Form>
						)}
					</Formik>

					<div className='divider'>or</div>
					<div className='flex justify-center gap-2'>
						Alread have an account?
						<Link to='/login' className='link link-secondary'>
							Login
						</Link>
					</div>
				</Card.Body>
			</Card>
		</>
	);
}

export default AuthSignup;
