import PropTypes from 'prop-types';
import { Hero } from 'react-daisyui';
import LoginContent from './LoginContent';
import SignupContent from './SignupContent';

function Auth({ page = 'login' }) {
  return (
    <Hero className='container max-w-5xl'>
      <Hero.Content className='flex-col lg:flex-row-reverse'>{page === 'login' ? <LoginContent /> : <SignupContent />}</Hero.Content>
    </Hero>
  );
}

Auth.propTypes = {
  page: PropTypes.string,
};

export default Auth;
