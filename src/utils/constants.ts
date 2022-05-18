import { ListItemType } from '../components/Layout/Footer/components/Menu';

const publicImagesSrc = '/images';

export const ICONS = {
  cart: `${publicImagesSrc}/cart.svg`,
  menuClosed: `${publicImagesSrc}/menu-closed.svg`,
  menuOpened: `${publicImagesSrc}/menu-opened.svg`,
  shop: `${publicImagesSrc}/shop.svg`,
};

export const SHOP_LIST_ITEMS: ListItemType[] = [
  { id: 'suitcases', name: 'Suitcases', routeLink: 'suitcases' },
  { id: 'bags', name: 'Bags', routeLink: 'bags' },
];
