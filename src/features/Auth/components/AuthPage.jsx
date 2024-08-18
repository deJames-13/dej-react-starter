import PropTypes from 'prop-types';
import { Hero } from 'react-daisyui';
import AuthLogin from './AuthLogin';
import AuthSignup from './AuthSignup';

function Auth({ page = 'login' }) {
  return (
    <Hero className='container max-w-5xl'>
      <Hero.Content className='flex-col lg:flex-row-reverse'>
        {page === 'login' ? <AuthLogin /> : <AuthSignup />}
      </Hero.Content>
    </Hero>
  );
}

Auth.propTypes = {
  page: PropTypes.string,
};

export default Auth;
