import { TextRainbow } from '@components';
import { Button, Hero } from 'react-daisyui';
import { FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function GuestHero() {
  return (
    <Hero>
      <Hero.Content className='text-center'>
        <div className='max-w-md'>
          <div className='py-4'>
            <h1 className='text-5xl font-bold'>
              <Link to='/'>
                <TextRainbow text='About' />
              </Link>
            </h1>
            <p className='py-6'>This is a simple app to demonstrate how to build a applications using Vite, ReactJS, and DaisyUI.</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos asperiores velit, nemo veniam distinctio quisquam delectus ab quaerat cupiditate perferendis, dolorem nihil blanditiis incidunt porro animi hic minima veritatis
              cum.
            </span>
          </div>
          <Link to='https://github.com/deJames-13'>
            <Button variant='outline' color='primary'>
              <FaGithubAlt />
              <span className='text-primary'>Created by deJames-13</span>
            </Button>
          </Link>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default GuestHero;
