import { Card } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { LoginForm } from './AuthForm';

function AuthLogin() {
  return (
    <>
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
          eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <Card.Body>
          <LoginForm />

          <div className="divider">or</div>
          <div className="flex justify-center gap-2">
            Doesn't have an account?
            <Link
              to="/signup"
              className="link link-secondary"
            >
              Sign Up
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default AuthLogin;
