import { TextRainbow, ThemeToggler } from '@components';
import { Button, Dropdown, Navbar } from 'react-daisyui';
import { FaBars, FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuList = () => {
  return (
    <>
      <Link
        to="/"
        className="btn btn-ghost"
      >
        Home
      </Link>
      <Link
        to="/dashboard"
        className="btn btn-ghost"
      >
        Dashboard
      </Link>
      <Link
        to="/about"
        className="btn btn-ghost"
      >
        About
      </Link>
    </>
  );
};

function Header({ clickLogo }) {
  return (
    <>
      <Navbar className="absolute top-0 bg-base-200">
        <Navbar.Start>
          <Dropdown className=" md:hidden">
            <Dropdown.Toggle>
              <FaBars />
            </Dropdown.Toggle>
            <Dropdown.Menu className="border border-gray-400 rounded border-opacity-30 bg-base-200 w-52">
              <MenuList />
            </Dropdown.Menu>
          </Dropdown>
          <TextRainbow
            text="ACME"
            className="text-xl font-extrabold btn btn-ghost"
            onClick={clickLogo}
          />
          <ThemeToggler />
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
          <MenuList />
        </Navbar.Center>
        <Navbar.End>
          <Button
            tag="a"
            href="https://github.com/deJames-13/dej-react-starter"
            color="primary"
            variant="outline"
          >
            <FaGithubAlt />
            View in GitHub
          </Button>
        </Navbar.End>
      </Navbar>
    </>
  );
}

export default Header;
