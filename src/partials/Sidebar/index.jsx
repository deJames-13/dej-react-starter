import { useToggle } from '@common';
import { Sidebar as SidebarComponent } from '@components';
import PropTypes from 'prop-types';
import { Menu, Navbar } from 'react-daisyui';
import { BsPinAngleFill } from 'react-icons/bs';

function Sidebar({ children, visible, toggleVisible, ...props }) {
  const [pin, togglePin] = useToggle(false);

  return (
    <SidebarComponent
      className="flex-row-reverse 2xl:flex "
      open={visible}
      onClickOverlay={toggleVisible()}
      contentClassName="2xl:w-full"
      sideClassName={`max-w-xs  scrollbar-hidden ${visible || pin ? '2xl:block 2xl:w-full 2xl:relative' : ''} `}
      overlayClassName="w-0"
      side={
        <div className="h-full">
          <div className="flex items-center w-full gap-2 p-2 bg-base-200">
            {!pin && (
              <div className="flex-grow btn btn-error btn-outline" onClick={toggleVisible()}>
                Close
              </div>
            )}
            <button
              className={`hidden 2xl:flex   btn btn-primary ${pin ? 'ml-auto' : 'btn-outline'}`}
              onClick={togglePin()}
            >
              <BsPinAngleFill />
            </button>
          </div>
          <Menu className="h-full p-4 bg-base-200 text-base-content">
            <Menu.Item>
              <a className="pr-16">Sidebar Item 1</a>
            </Menu.Item>
            <Menu.Item>
              <a className="pr-16">Sidebar Item 2</a>
            </Menu.Item>
          </Menu>
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
