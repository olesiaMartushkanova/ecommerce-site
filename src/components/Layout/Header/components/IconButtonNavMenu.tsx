import { useState, useEffect } from 'react';
import Icon from '../../../Primitives/Icon';

const IconButtonNavMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [iconSrc, setIconSrc] = useState('/images/menu-closed.svg');

  const handleClick = () =>
    isMenuOpened ? setIsMenuOpened(false) : setIsMenuOpened(true);

  useEffect(() => {
    const src = isMenuOpened
      ? '/images/menu-opened.svg'
      : '/images/menu-closed.svg';
    setIconSrc(src);
  }, [isMenuOpened]);

  return (
    <Icon
      alt={'header navigation icon menu'}
      src={iconSrc}
      isClickable={true}
      onClick={handleClick}
    />
  );
};
export default IconButtonNavMenu;
