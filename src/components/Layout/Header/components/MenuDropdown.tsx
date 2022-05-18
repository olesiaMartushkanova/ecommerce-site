import { SHOP_LIST_ITEMS } from '../../../../utils/constants';
import List from '../../../Primitives/List/List';

const MenuDropdown = () => {
  // TODO: convert to uppercase
  return <List listItems={SHOP_LIST_ITEMS} className='mb-3 last:mb-0' />;
};
export default MenuDropdown;
