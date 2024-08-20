import { useToggle } from '@common';
import { Sidebar as SidebarComponent } from '@common/components';
import PropTypes from 'prop-types';
import { Button, Dropdown, Menu } from 'react-daisyui';
import {
  FaAngleRight,
  FaArrowAltCircleRight,
  FaBoxes,
  FaCartPlus,
  FaHome,
  FaTable,
  FaTimes,
  FaUsers,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideContent = ({ side }) => {
  return (
    <>
      <div className="flex flex-col w-full h-full overflow-visible">
        <div className="flex flex-col items-center flex-grow p-2 bg-base-200">
          <span className="flex items-center gap-2 font-bold btn btn-ghost aspect-square ">
            <FaAngleRight />
          </span>

          <span className="flex items-center gap-2 font-bold btn btn-ghost aspect-square ">
            <FaHome />
          </span>
          <Dropdown.Details
            horizontal="right"
            end="true"
          >
            <Dropdown.Details.Toggle className="relative">
              <span className="flex items-center gap-2 font-bold aspect-square ">
                <FaUsers />
              </span>
            </Dropdown.Details.Toggle>
            <Dropdown.Menu className="absulute w-52 z-[100!important]">
              <Dropdown.Item>Item 1</Dropdown.Item>
              <Dropdown.Item>Item 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Details>

          <span className="flex items-center gap-2 font-bold btn btn-ghost aspect-square ">
            <FaBoxes />
          </span>

          <span className="flex items-center gap-2 font-bold btn btn-ghost aspect-square ">
            <FaCartPlus />
          </span>

          {side}
          <div className="mt-auto">
            <div className="divider"></div>
            <div className="p-4 ">
              <Button
                color="error"
                variant="outline"
                className="w-full "
              >
                <FaArrowAltCircleRight />
              </Button>
            </div>
          </div>
        </div>
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

function SidebarIcons({ children, visible, toggleVisible, side, ...props }) {
  const [pin, togglePin] = useToggle(false);
  const { noOverlayEvent, noOverlay } = props;
  const sideProps = { pin, togglePin, toggleVisible, side, noOverlayEvent, noOverlay };

  return (
    <SidebarComponent
      open={true}
      onClickOverlay={toggleVisible(pin)}
      className="sticky flex-row-reverse max-h-screen overflow-auto 2xl:flex"
      contentClassName="scrollbar-thin 2xl:w-full 2xl:max-h-screen overflow-y-auto transition-all ease-in-out"
      sideClassName="w-20 block sticky"
      overlayClassName="w-0"
      side={<SideContent {...sideProps} />}
      {...props}
    >
      {children}
    </SidebarComponent>
  );
}

SidebarIcons.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  toggleVisible: PropTypes.func,
};

export default SidebarIcons;
