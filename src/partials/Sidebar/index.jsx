import { useToggle } from '@common';
import { Sidebar as SidebarComponent } from '@components';
import PropTypes from 'prop-types';
import { BsPinAngleFill } from 'react-icons/bs';

const SideContent = ({ pin, togglePin, toggleVisible, side, noOverlayEvent = false, noOverlay = false }) => {
  return (
    <>
      {!pin && (
        <div
          onClick={toggleVisible()}
          className={`fixed top-0 w-screen h-full max-h-screen overflow-auto ${
            noOverlay ? '' : 'bg-black bg-opacity-50'
          } ${noOverlayEvent ? 'pointer-events-none' : ''} `}
        ></div>
      )}
      <div className="relative flex flex-col w-full h-full overflow-visible">
        <div className="flex items-center w-full gap-2 p-2 bg-base-200">
          {!pin && (
            <div
              className="flex-grow btn btn-error btn-outline"
              onClick={toggleVisible()}
            >
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
    </>
  );
};

SideContent.propTypes = {
  pin: PropTypes.bool,
  togglePin: PropTypes.func,
  toggleVisible: PropTypes.func,
  side: PropTypes.node,
};

function Sidebar({ children, visible, toggleVisible, side, ...props }) {
  const [pin, togglePin] = useToggle(false);
  const { noOverlayEvent, noOverlay } = props;
  const sideProps = { pin, togglePin, toggleVisible, side, noOverlayEvent, noOverlay };

  return (
    <SidebarComponent
      open={visible}
      onClickOverlay={toggleVisible()}
      className="sticky flex-row-reverse max-h-screen overflow-auto 2xl:flex"
      contentClassName="2xl:w-full 2xl:max-h-screen overflow-y-auto"
      sideClassName={`w-60 md:min-w-60 md:w-80 md:max-w-xs scrollbar-hidden  ${
        visible || pin ? '2xl:block 2xl:relative' : ''
      } `}
      overlayClassName="w-0"
      side={<SideContent {...sideProps} />}
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
