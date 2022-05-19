import Link from 'next/link';
import Icon from '../Icon/Icon';

export type ListItemType = {
  id: string;
  title: string;
  routeLink?: string;
};

type ListProps = {
  listItems: ListItemType[];
  className?: string;
  isIconVisible?: boolean;
  iconSrc?: string;
};

const List = ({
  listItems,
  className,
  isIconVisible = false,
  iconSrc,
}: ListProps) => (
  <>
    {listItems.map((item) => (
      <li className={`${className} list-none`} key={item.id}>
        <div className='flex'>
          <Link href={`/${item?.routeLink}`}>
            <a>{item.title}</a>
          </Link>
          {isIconVisible && (
            <Icon src={iconSrc ?? ''} alt={`list option ${item.title}`} />
          )}
        </div>
      </li>
    ))}
  </>
);

export default List;
