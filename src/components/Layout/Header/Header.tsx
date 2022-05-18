import { useState } from 'react';
import IconButtonCart from './components/IconButtonCart';
import IconButtonNavMenu from './components/IconButtonNavMenu';
import MenuDropdown from './components/MenuDropdown';

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleClick = () =>
    isMenuOpened ? setIsMenuOpened(false) : setIsMenuOpened(true);

  return (
    <>
      <div className='flex relative justify-evenly items-center h-24'>
        <div className='absolute left-0 ml-6'>
          <IconButtonNavMenu
            isMenuOpened={isMenuOpened}
            onClick={handleClick}
          />
        </div>
        <div className='font-bold text-xl bg-black text-white p-2'>
          Happy Shop
        </div>
        <div className='absolute right-0 mr-6'>
          <IconButtonCart />
        </div>
      </div>
      {isMenuOpened && (
        <div className='w-52 text-3xl p-4'>
          <MenuDropdown />
        </div>
      )}
    </>
  );
};

export default Header;
