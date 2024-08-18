import PropTypes from 'prop-types';

function Form(props) {
  return <div>Form</div>;
}

Form.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

export default Form;
