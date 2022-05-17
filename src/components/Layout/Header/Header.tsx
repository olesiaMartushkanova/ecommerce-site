import IconButtonCart from './components/IconButtonCart';
import IconButtonNavMenu from './components/IconButtonNavMenu';

const Header = () => {
  return (
    <div className='h-12 items-center flex relative justify-evenly'>
      <div className='absolute left-0 ml-6'>
        <IconButtonNavMenu />
      </div>
      <div className='font-bold'>ShopHappy</div>
      <div className='absolute right-0 mr-6'>
        <IconButtonCart />
      </div>
    </div>
  );
};

export default Header;
