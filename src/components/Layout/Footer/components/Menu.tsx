import Link from 'next/link';

export interface IListItem {
  id: string;
  name: string;
  routeLink?: string;
}

interface IMenu {
  listItems: IListItem[];
}

const Menu = ({ listItems }: IMenu) => {
  return (
    <>
      {listItems.map((item) => (
        <li className='text-lg list-none' key={item.id}>
          <Link href={`/${item.routeLink}`}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Menu;
