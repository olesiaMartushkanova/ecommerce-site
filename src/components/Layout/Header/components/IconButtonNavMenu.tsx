import { useState, useEffect } from 'react';
import { ICONS } from '../../../../utils/constants';
import Icon from '../../../Primitives/Icon/Icon';

type IconButtonNavMenuProps = {
  isMenuOpened?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const IconButtonNavMenu = ({
  isMenuOpened,
  onClick,
}: IconButtonNavMenuProps) => {
  const [iconSrc, setIconSrc] = useState(ICONS.menuClosed);

  useEffect(() => {
    const src = isMenuOpened ? ICONS.menuOpened : ICONS.menuClosed;
    setIconSrc(src);
  }, [isMenuOpened]);

  return (
    <div>
      <Icon
        alt={'header navigation icon menu'}
        src={iconSrc}
        isClickable={true}
        onClick={onClick}
      />
    </div>
  );
};
export default IconButtonNavMenu;
