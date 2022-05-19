import { ICONS, SHOP_LIST_ITEMS } from '../../../../utils/constants';
import List from '../../../Primitives/List/List';

type MenuDropdownProps = {
  isMenuOpened?: boolean;
};

const MenuDropdown = ({ isMenuOpened }: MenuDropdownProps) => {
  return (
    <div
      className={`${
        isMenuOpened ? 'block absolute' : 'hidden'
      } w-full text-3xl p-4 shadow-lg`}
    >
      <List
        listItems={SHOP_LIST_ITEMS}
        className='mb-3 last:mb-0 ml-2'
        isIconVisible={true}
        iconSrc={ICONS.next}
      />
    </div>
  );
};
export default MenuDropdown;
