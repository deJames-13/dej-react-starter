import { useToggle } from '@common';
import { FooterWrapper, Header, Sidebar } from '@partials';
import { Menu } from 'react-daisyui';
import { Outlet } from 'react-router-dom';

function PrivateLayout() {
  const user = {
    name: 'Private User',
  };
  const [visible, toggleVisible] = useToggle(false);
  return (
    <div id="private-layout" className="relative">
      <Sidebar
        open={visible}
        onClickOverlay={toggleVisible()}
        side={
          <Menu className="container h-full max-w-xs p-4 pt-24 bg-base-200 text-base-content">
            <Menu.Item>
              <a>Sidebar Item 1</a>
            </Menu.Item>
            <Menu.Item>
              <a>Sidebar Item 2</a>
            </Menu.Item>
          </Menu>
        }
      >
        <div className="flex-grow">
          <Header clickLogo={toggleVisible()} />
          <div className="container grid min-h-screen mx-auto place-items-center">
            <Outlet context={{ user }} />
          </div>
          <FooterWrapper />
        </div>
      </Sidebar>
    </div>
  );
}

export default PrivateLayout;
