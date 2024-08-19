import { FooterWrapper, Header } from '@partials';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div id="default-layout">
      <Header />
      <div className="container grid min-h-screen mx-auto place-items-center">
        <Outlet />
      </div>
      <FooterWrapper />
    </div>
  );
}

export default DefaultLayout;
