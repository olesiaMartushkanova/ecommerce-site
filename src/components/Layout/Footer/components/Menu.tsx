import Link from 'next/link';

export interface IListItem {
  id: string;
  name: string;
  routeLink?: string;
}

interface IMenu {
  title: string;
  listItems: IListItem[];
}

const Menu = ({ listItems, title }: IMenu) => {
  const elListItem = listItems.map((item) => (
    <li className='text-lg list-none' key={item.id}>
      <Link href={`/${item.routeLink}`}>
        <a>{item.name}</a>
      </Link>
    </li>
  ));

  return (
    <>
      <div>{title}</div>
      {elListItem}
    </>
  );
};

export default Menu;
