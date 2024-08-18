import { Button, Card, Form, Input } from 'react-daisyui';
import { Link, useNavigate } from 'react-router-dom';

function SignupContent() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <>
      <div className='text-center lg:text-left'>
        <h1 className='text-5xl font-bold'>Sign up now!</h1>
        <p className='py-6'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <Card className='flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <Card.Body>
          <Form>
            <Form.Label title='Username' />
            <Input type='text' placeholder='username' className='input-bordered' />
          </Form>
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
            <Button color='primary'>Sign Up</Button>
          </Form>
        </Card.Body>

        <div className='divider'>or</div>
        <div className='flex justify-center gap-2'>
          Alread have an account?
          <Link to='/login' className='link link-secondary'>
            Login
          </Link>
        </div>
      </Card>
    </>
  );
}

export default SignupContent;
