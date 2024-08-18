import { FooterWrapper, Header } from '@partials';
import { Outlet } from 'react-router-dom';

function PrivateLayout() {
  const user = {
    name: 'Private User',
  };
  return (
    <div id='private-layout'>
      <Header />
      <div className='container grid min-h-screen mx-auto place-items-center'>
        <Outlet context={{ user }} />
      </div>
      <FooterWrapper />
    </div>
  );
}

export default PrivateLayout;
