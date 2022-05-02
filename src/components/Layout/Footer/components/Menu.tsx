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
          {item.name}
        </li>
      ))}
    </>
  );
};

export default Menu;
