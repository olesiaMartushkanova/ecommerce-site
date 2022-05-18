import Link from 'next/link';

export type ListItemType = {
  id: string;
  title: string;
  routeLink?: string;
};

type ListProps = {
  listItems: ListItemType[];
  className?: string;
};

const List = ({ listItems, className }: ListProps) => (
  <>
    {listItems.map((item) => (
      <li className={`${className} list-none`} key={item.id}>
        <Link href={`/${item?.routeLink}`}>
          <a>{item.title}</a>
        </Link>
      </li>
    ))}
  </>
);

export default List;
