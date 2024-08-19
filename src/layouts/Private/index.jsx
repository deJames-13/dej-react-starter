import { useToggle } from '@common';
import { FooterWrapper, Header, Sidebar } from '@partials';
import { Outlet } from 'react-router-dom';

function PrivateLayout() {
  const user = {
    name: 'Private User',
  };
  const [visible, toggleVisible] = useToggle(true);

  return (
    <div id="private-layout" className="relative">
      <Sidebar visible={visible} toggleVisible={toggleVisible}>
        <div>
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
