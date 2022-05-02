export interface IListItem {
  name: string;
  routeLink?: string;
}

interface IMenu {
  listItems: IListItem[];
}

const Menu = ({ listItems }: IMenu) => {
  return (
    <>
      {listItems.map((item) => {
        <li>{item.name}</li>;
      })}
    </>
  );
};

export default Menu;
