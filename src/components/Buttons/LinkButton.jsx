import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

function LinkButton({ className, children, ...props }) {
  return (
    <>
      <Link {...props} className={`active:scale-95 hover:scale-105 hover:text-primary hover:z-10 transition-all ease-in-out cursor-pointer ${className}`}>
        {children}
      </Link>
    </>
  );
}
LinkButton.propTypes = propTypes;

export default LinkButton;
