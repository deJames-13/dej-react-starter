import TextRainbow from '@common/components';
import PropTypes from 'prop-types';
import { Button, Hero } from 'react-daisyui';
import { Link } from 'react-router-dom';

function UserSection({ user }) {
  return (
    <Hero>
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h3 className="text-4xl font-semibold">Welcome,</h3>
          <h1 className="text-5xl font-bold">
            <TextRainbow text={user.name || 'Private User'} />
          </h1>
          <p className="py-6">
            This route is for authenticated users only. You should modify the logic for this route to fit your
            application.
          </p>
          <Link to="/profile">
            <Button color="primary">View Profile</Button>
          </Link>
        </div>
      </Hero.Content>
    </Hero>
  );
}

UserSection.propTypes = {
  user: PropTypes.object,
};

export default UserSection;
