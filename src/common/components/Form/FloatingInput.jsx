import { PropTypes } from 'prop-types';

function FloatingInput({ label, refer, meta, ...inputProps }) {
  return (
    <div>
      <div
        className={`relative border ${meta?.touched && meta?.error ? 'border-error' : 'border-gray-300'} overflow-clip`}
      >
        <input
          type="text"
          ref={refer}
          {...inputProps}
          className={`block shadow-xl px-2.5 pb-2.5 pt-5 w-full text-sm bg-base-200 border-0  ${
            meta?.touched && meta?.error ? 'border-error' : 'border-gray-300'
          } appearance-none  focus:border-b-2 focus:outline-none focus:ring-0 focus: ${
            meta?.touched && meta?.error ? 'border-error' : 'border-primary'
          }/80 peer`}
          placeholder=" "
          autoComplete="off"
        />
        <label
          htmlFor={inputProps.id ?? 'floating__filled'}
          className={`absolute text-sm ${
            meta?.touched && meta?.error ? 'text-error' : ''
          } duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:${
            meta?.touched && meta?.error ? 'text-error' : 'text-primary'
          }/80 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
        >
          {label}
        </label>
      </div>
      {meta?.touched && meta?.error && <div className="text-xs italic text-error">{meta?.error}</div>}
    </div>
  );
}

FloatingInput.propTypes = {
  label: PropTypes.string,
  refer: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  meta: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
export default FloatingInput;
