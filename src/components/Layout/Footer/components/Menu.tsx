import Link from 'next/link';

export type ListItemType = {
  id: string;
  name: string;
  routeLink?: string;
};

type MenuProps = {
  title: string;
  listItems: ListItemType[];
  className?: string;
};

const Menu = ({ listItems, title, className }: MenuProps) => {
  return (
    <div className='mb-4 mt-2'>
      <div className='text-lg font-bold mb-1 mt-2'>{title}</div>
      {listItems.map((item) => (
        <li className={`${className} list-none`} key={item.id}>
          <Link href={`/${item.routeLink}`}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Menu;
