import List, { ListItemType } from '../../../Primitives/List/List';

type MenuProps = {
  title: string;
  listItems: ListItemType[];
  className?: string;
};

const Menu = ({ listItems, title, className }: MenuProps) => {
  return (
    <div className='mb-4 mt-2'>
      <div className='text-lg font-bold mb-1 mt-2'>{title}</div>
      <List className={className} listItems={listItems} />
    </div>
  );
};

export default Menu;
