import { THEMES } from '@constants';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';

const propTypes = {
  type: PropTypes.string,
  theme: PropTypes.string,
  onToggle: PropTypes.func,
};

const IconsInToggler = ({ onToggle }) => {
  const isLocalTheme = localStorage.getItem('theme') === THEMES.DARK;

  return (
    <label className='grid cursor-pointer place-items-center'>
      <input onChange={onToggle} checked={isLocalTheme} type='checkbox' className='col-span-2 col-start-1 row-start-1 toggle theme-controller bg-base-content' />
      <svg
        className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='14'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='12' cy='12' r='5' />
        <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
      </svg>
      <svg
        className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='14'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
      </svg>
    </label>
  );
};

const WithIcons = ({ onToggle }) => {
  const isLocalTheme = localStorage.getItem('theme') === THEMES.DARK;

  return (
    <label className='flex gap-2 cursor-pointer'>
      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <circle cx='12' cy='12' r='5' />
        <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
      </svg>
      <input onChange={onToggle} checked={isLocalTheme} type='checkbox' className='toggle theme-controller' />
      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
      </svg>
    </label>
  );
};

const SwapToggler = ({ onToggle }) => {
  const isLocalTheme = localStorage.getItem('theme') === THEMES.DARK;

  return (
    <label className='swap swap-rotate'>
      <input onChange={onToggle} checked={isLocalTheme} type='checkbox' className='theme-controller' />
      <svg className='w-10 h-10 fill-current swap-off' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
      </svg>

      <svg className='w-10 h-10 fill-current swap-on' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
      </svg>
    </label>
  );
};

function ThemeToggler({ type }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') || THEMES.DARK;
    document.documentElement.setAttribute('data-theme', localTheme);
  }, [theme]);

  const handleThemeChange = (theme) => {
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  switch (type) {
    case 'icons':
      return <WithIcons theme={theme} onToggle={() => handleThemeChange(theme)} />;

    case 'swap':
      return <SwapToggler theme={theme} onToggle={() => handleThemeChange(theme)} />;

    default:
      return <IconsInToggler theme={theme} onToggle={() => handleThemeChange(theme)} />;
  }
}

ThemeToggler.propTypes = { type: propTypes.type };
WithIcons.propTypes = propTypes;
SwapToggler.propTypes = propTypes;
IconsInToggler.propTypes = propTypes;

export default ThemeToggler;
