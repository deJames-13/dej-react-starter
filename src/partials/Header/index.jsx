import { TextRainbow, ThemeToggler } from '@components';
import { Button, Navbar } from 'react-daisyui';
import { FaBars, FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header({ clickLogo }) {
  return (
    <>
      <Navbar>
        <Navbar.Start>
          <TextRainbow text="ACME" className="text-xl font-extrabold btn btn-ghost" onClick={clickLogo} />
          <ThemeToggler />
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
          <Link to="/" className="btn btn-ghost">
            Home
          </Link>
          <Link to="/dashboard" className="btn btn-ghost">
            Dashboard
          </Link>
          <Link to="/about" className="btn btn-ghost">
            About
          </Link>
        </Navbar.Center>
        <Navbar.End>
          <Button tag="a" href="https://github.com/deJames-13/dej-react-starter" color="primary" variant="outline">
            <FaGithubAlt />
            View in GitHub
          </Button>
        </Navbar.End>
      </Navbar>
    </>
  );
}

export default Header;
