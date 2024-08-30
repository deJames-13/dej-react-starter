import { TextRainbow } from '@common/components';
import { Button, Hero } from 'react-daisyui';
import { Link } from 'react-router-dom';

function GuestSection() {
  return (
    <Hero>
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            <span>Vite + React +</span>
            <Link to="https://daisyui.com/">
              <TextRainbow text="daisyUI" />
            </Link>
          </h1>
          <p className="py-6">A simple starter boilerplate for REACT client using daisyUI theme.</p>
          <Link to="/signup">
            <Button color="primary">Get Started</Button>
          </Link>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default GuestSection;
