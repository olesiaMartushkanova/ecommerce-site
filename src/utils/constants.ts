import { ListItemType } from '../components/Primitives/List/List';

const publicImagesSrc = '/icons';

export const ICONS = {
  cart: `${publicImagesSrc}/cart.svg`,
  menuClosed: `${publicImagesSrc}/menu-closed.svg`,
  menuOpened: `${publicImagesSrc}/menu-opened.svg`,
  shop: `${publicImagesSrc}/shop.svg`,
  next: `${publicImagesSrc}/next.svg`,
};

export const SHOP_LIST_ITEMS: ListItemType[] = [
  { id: 'suitcases', title: 'Suitcases', routeLink: 'suitcases' },
  { id: 'bags', title: 'Bags', routeLink: 'bags' },
];
