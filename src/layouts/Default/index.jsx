import { Outlet } from 'react-router-dom';
import { FooterWrapper, Header } from '../../partials';

function DefaultLayout() {
  return (
    <div id='default-layout'>
      <Header />
      <div className='container grid min-h-screen mx-auto place-items-center'>
        <Outlet />
      </div>
      <FooterWrapper />
    </div>
  );
}

export default DefaultLayout;
