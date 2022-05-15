import Icon from '../../Primitives/Icon';
import IconButtonNavMenu from './components/IconButtonNavMenu';

const Header = () => {
  const elCartIcon = (
    <Icon src='/images/cart.svg' alt='cart icon button'></Icon>
  );

  return (
    <div className='bg-green-400 h-12 flex justify-evenly items-center'>
      <IconButtonNavMenu />
      <div className='font-bold'>ShopHappy</div>
      {elCartIcon}
    </div>
  );
};

export default Header;
