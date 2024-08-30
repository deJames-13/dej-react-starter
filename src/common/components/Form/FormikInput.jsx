import { useField } from 'formik';
import PropTypes from 'prop-types';
import FloatingInput from './FloatingInput';
import FormInput from './FormInput';

function FormikInput({ label, variant, ...props }) {
  const [field, meta] = useField(props);
  switch (variant) {
    case 'floating':
      return (
        <FloatingInput
          label={label}
          meta={meta}
          {...field}
          {...props}
        />
      );

    default:
      return (
        <FormInput
          label={label}
          meta={meta}
          {...field}
          {...props}
        />
      );
  }
}

FormikInput.propTypes = {
  label: PropTypes.string,
};

export default FormikInput;
