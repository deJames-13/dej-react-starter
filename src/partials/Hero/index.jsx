import { TextRainbow } from '@components';
import { PropTypes } from 'prop-types';
import { Button, Hero } from 'react-daisyui';
import { Link } from 'react-router-dom';

const Guest = () => {
  return (
    <Hero>
      <Hero.Content className='text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>
            <span>Vite + React +</span>
            <Link to='https://daisyui.com/'>
              <TextRainbow text='daisyUI' />
            </Link>
          </h1>
          <p className='py-6'>A simple starter boilerplate for REACT client using daisyUI theme.</p>
          <Link to='/signup'>
            <Button color='primary'>Get Started</Button>
          </Link>
        </div>
      </Hero.Content>
    </Hero>
  );
};

const User = ({ userInfo }) => {
  return (
    <Hero>
      <Hero.Content className='text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>
            Welcome, <span className='text-primary'>{userInfo.name}</span>
          </h1>
          <p className='py-6'>A simple MERN stack authentication boilerplate.</p>
          <Link to='/profile'>
            <Button color='primary'>View Profile</Button>
          </Link>
        </div>
      </Hero.Content>
    </Hero>
  );
};
User.propTypes = {
  userInfo: PropTypes.object,
};

function HeroWrapper() {
  return (
    <>
      <Guest />
    </>
  );
}

export default HeroWrapper;
