import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

function Button({ children, ...buttonProps }) {
  return (
    <button
      className='btn btn-primary'
      {...buttonProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = propTypes;

export default Button;
export { default as BackButton } from './BackButton';
export { default as LinkButton } from './LinkButton';
