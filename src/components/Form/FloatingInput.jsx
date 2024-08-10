import { PropTypes } from 'prop-types';
function FloatingInput({ label, refer, ...inputProps }) {
  return (
    <div className='relative border border-gray-500 rounded-lg overflow-clip'>
      <input
        type='text'
        className='block shadow-xl px-2.5 pb-2.5 pt-5 w-full text-sm bg-base-200 border-0 border-gray-300 appearance-none  focus:border-b-2 focus:outline-none focus:ring-0 focus:border-primary/80 peer'
        placeholder=' '
        autoComplete='off'
        ref={refer}
        {...inputProps}
      />
      <label
        htmlFor={inputProps.id ?? 'floating__filled'}
        className='absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary/80 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
      >
        {label}
      </label>
    </div>
  );
}

FloatingInput.propTypes = {
  label: PropTypes.string,
  refer: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
export default FloatingInput;
