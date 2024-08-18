import PropTypes from 'prop-types';
import React from 'react';
import { Card, Form, Input } from 'react-daisyui';
import { Link } from 'react-router-dom';

function LoginContent(props) {
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
          <Form className='mt-6'>
            <Button color='primary'>Login</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

LoginContent.propTypes = {};

export default LoginContent;
