import { useState } from 'react';
import IconButtonCart from './components/IconButtonCart';
import IconButtonNavMenu from './components/IconButtonNavMenu';
import Label from './components/Label';
import MenuDropdown from './components/MenuDropdown';

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleClick = () =>
    isMenuOpened ? setIsMenuOpened(false) : setIsMenuOpened(true);

  return (
    <div className={className}>
      <div className='flex relative justify-evenly items-center h-24'>
        <div className='absolute left-0 ml-6'>
          <IconButtonNavMenu
            isMenuOpened={isMenuOpened}
            onClick={handleClick}
          />
        </div>
        <Label />
        <div className='absolute right-0 mr-6'>
          <IconButtonCart />
        </div>
      </div>
      <MenuDropdown isMenuOpened={isMenuOpened} />
    </div>
  );
};

export default Header;
