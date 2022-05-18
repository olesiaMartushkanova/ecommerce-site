import List, { ListItemType } from '../../../Primitives/List/List';

type MenuProps = {
  title: string;
  listItems: ListItemType[];
  className?: string;
};

const Menu = ({ listItems, title, className }: MenuProps) => {
  return (
    <div className='mb-8 mt-6'>
      <div className='font-bold text-2xl mb-1 mt-2'>{title}</div>
      <List className={`${className} text-lg`} listItems={listItems} />
    </div>
  );
};

export default Menu;
