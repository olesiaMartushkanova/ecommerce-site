import { useState, useEffect } from 'react';
import { ICONS } from '../../../../utils/constants';
import Icon from '../../../Primitives/Icon/Icon';

const IconButtonNavMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [iconSrc, setIconSrc] = useState(ICONS.menuClosed);

  const handleClick = () =>
    isMenuOpened ? setIsMenuOpened(false) : setIsMenuOpened(true);

  useEffect(() => {
    const src = isMenuOpened ? ICONS.menuOpened : ICONS.menuClosed;
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
