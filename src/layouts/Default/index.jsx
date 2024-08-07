import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div id='default-layout'>
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
