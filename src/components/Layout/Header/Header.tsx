import Icon from '../../Primitives/Icon';

const Header = () => {
  const elCartIcon = <Icon src='/images/cart.svg'></Icon>;

  return (
    <div className='bg-green-400 h-10 flex justify-evenly items-center'>
      <div>Menu</div>
      <div className='font-bold'>ShopHappy</div>
      {elCartIcon}
    </div>
  );
};

export default Header;
