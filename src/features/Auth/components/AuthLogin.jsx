import { Button, Card, Form, Input } from 'react-daisyui';
import { Link, useNavigate } from 'react-router-dom';

function AuthLogin() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <>
      <div className='text-center lg:text-left'>
        <h1 className='text-5xl font-bold'>Login now!</h1>
        <p className='py-6'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <Card className='flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <Card.Body>
          <Form>
            <Form.Label title='Email' />
            <Input type='text' placeholder='email' className='input-bordered' />
          </Form>
          <Form>
            <Form.Label title='Password' />
            <Input type='text' placeholder='password' className='input-bordered' />
            <label className='label'>
              <Link href='#' className='label-text-alt' hover>
                Forgot password?
              </Link>
            </label>
          </Form>
          <Form className='mt-6' onSubmit={handleSubmit}>
            <Button color='primary'>Login</Button>
          </Form>
          <div className='divider'>or</div>
          <div className='flex justify-center gap-2'>
            Don't have an account?
            <Link to='/signup' className='link link-primary'>
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
