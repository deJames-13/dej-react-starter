import { useToggle } from '@common';
import { FooterWrapper, Header, Sidebar } from '@partials';
import { Outlet } from 'react-router-dom';

function PrivateLayout() {
  const user = {
    name: 'Private User',
  };
  const [visible, toggleVisible] = useToggle(false);

  return (
    <div
      id="private-layout"
      className="relative w-screen h-screen overflow-y-auto "
    >
      <Sidebar
        visible={visible}
        toggleVisible={toggleVisible}
        noOverlay={true}
        noOverlayEvent={true}
      >
        <div className="relative w-full">
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
