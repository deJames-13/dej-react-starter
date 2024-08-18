import { ThemeToggler } from '@components';
import { Button, Navbar } from 'react-daisyui';
import { FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar>
        <Navbar.Start>
          <Link to='/' className='text-xl normal-case btn btn-ghost'>
            daisyUI
          </Link>
          <ThemeToggler />
        </Navbar.Start>
        <Navbar.Center className='hidden lg:flex'>
          <Link to='/' className='btn btn-ghost'>
            Home
          </Link>
          <Link to='/dashboard' className='btn btn-ghost'>
            Dashboard
          </Link>
          <Link to='/about' className='btn btn-ghost'>
            About
          </Link>
        </Navbar.Center>
        <Navbar.End>
          <Button tag='a' href='https://github.com/deJames-13/dej-react-starter' color='primary' variant='outline'>
            <FaGithubAlt />
            View in GitHub
          </Button>
        </Navbar.End>
      </Navbar>
    </>
  );
}

export default Header;
