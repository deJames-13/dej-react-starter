import { PropTypes } from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const propTypes = {
  status: PropTypes.number,
  message: PropTypes.string,
};

function Error({ status, message }) {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen gap-4'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>
          Error
          <span className='text-error'> {status || 500}</span>
        </h1>
        <p>{message || 'Something went wrong.'}</p>
      </div>
      <Link to={'/'} className='flex items-center gap-1 transition-all ease-in hover:text-primary hover:ml-2 group'>
        <FaArrowRight />
        <span className='group-hover:underline'>Go Back to Home Page</span>
      </Link>
    </div>
  );
}

Error.propTypes = propTypes;

export const NotFound = () => <Error status={404} message='Page not found.' />;
export const ServerError = () => <Error status={500} message='Server error.' />;
export const Unauthorized = () => <Error status={401} message='Unauthorized.' />;
export const Forbidden = () => <Error status={403} message='Forbidden.' />;
export const BadRequest = () => <Error status={400} message='Bad request.' />;
export const Unavailable = () => <Error status={503} message='Service unavailable.' />;
export const Timeout = () => <Error status={504} message='Request timeout.' />;
export const NetworkError = () => <Error status={0} message='Network error.' />;
export const UnknownError = () => <Error status={null} message='Unknown error.' />;
export const IAmATeapot = () => <Error status={418} message='I am a teapot.' />;
export default Error;
