import { useToggle } from '@common';
import { Sidebar as SidebarComponent } from '@components';
import PropTypes from 'prop-types';
import { Menu, Navbar } from 'react-daisyui';
import { BsPinAngleFill } from 'react-icons/bs';

function Sidebar({ children, visible, toggleVisible, side, ...props }) {
  const [pin, togglePin] = useToggle(false);

  return (
    <SidebarComponent
      className="sticky flex-row-reverse h-screen 2xl:flex"
      open={visible}
      onClickOverlay={toggleVisible()}
      contentClassName="2xl:w-full 2xl:max-h-screen overflow-y-auto"
      sideClassName={`h-full min-w-60 w-80 max-w-xs scrollbar-hidden  ${
        visible || pin ? '2xl:block 2xl:relative' : ''
      } `}
      overlayClassName="w-0"
      side={
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center w-full gap-2 p-2 bg-base-200">
            {!pin && (
              <div className="flex-grow btn btn-error btn-outline" onClick={toggleVisible()}>
                Close
              </div>
            )}
            <button
              className={`hidden 2xl:flex btn btn-primary ${pin ? 'ml-auto' : 'btn-outline'}`}
              onClick={togglePin()}
            >
              <BsPinAngleFill />
            </button>
          </div>
          <div className="flex-grow bg-base-200">{side}</div>
        </div>
      }
      {...props}
    >
      {children}
    </SidebarComponent>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  toggleVisible: PropTypes.func,
};

export default Sidebar;
