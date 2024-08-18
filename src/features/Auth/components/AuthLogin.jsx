import { FormikInput } from '@components';
import { Form, Formik } from 'formik';
import { Button, Card } from 'react-daisyui';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const validation = yup.object().shape({
	email: yup.string().email('Please enter a valid email').required('Required'),
	password: yup.string().required('Required'),
});

const initialValues = {
	email: '',
	password: '',
};

const onSubmit = async (values, actions) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	actions.resetForm();
};

const formikProps = {
	initialValues: {
		email: '',
		password: '',
	},
	validationSchema: validation,
	onSubmit: onSubmit,
};
function AuthLogin() {
	return (
		<>
			<div className='text-center lg:text-left'>
				<h1 className='text-5xl font-bold'>Login now!</h1>
				<p className='py-6'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
			</div>
			<Card className='flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
				<Card.Body>
					<Formik {...formikProps}>
						{({ isSubmitting }) => (
							<Form autoComplete='off' autoFocus={true} className='flex flex-col gap-8'>
								<FormikInput label='Enter your email' name='email' type='email' />
								<FormikInput label='Enter your password' name='password' type='password' />

								<Button variant='outline' color='primary' disabled={isSubmitting}>
									{isSubmitting ? 'Loading...' : 'Log In'}
								</Button>
							</Form>
						)}
					</Formik>

					<div className='divider'>or</div>
					<div className='flex justify-center gap-2'>
						Doesn't have an account?
						<Link to='/signup' className='link link-secondary'>
							Sign Up
						</Link>
					</div>
				</Card.Body>
			</Card>
		</>
	);
}

AuthLogin.propTypes = {};

export default AuthLogin;
