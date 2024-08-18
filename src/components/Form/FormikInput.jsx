import { useField } from 'formik';
import PropTypes from 'prop-types';
import FloatingInput from './FloatingInput';

function FormikInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return <FloatingInput label={label} meta={meta} {...field} {...props} />;
}

FormikInput.propTypes = {
  label: PropTypes.string,
};

export default FormikInput;
