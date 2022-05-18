import { ICONS, SHOP_LIST_ITEMS } from '../../../../utils/constants';
import List from '../../../Primitives/List/List';

const MenuDropdown = () => {
  // TODO: convert to uppercase
  return (
    <div className='w-55 text-3xl p-4 shadow-lg'>
      <List
        listItems={SHOP_LIST_ITEMS}
        className='mb-3 last:mb-0'
        isIconVisible={true}
        iconSrc={ICONS.next}
      />
    </div>
  );
};
export default MenuDropdown;
