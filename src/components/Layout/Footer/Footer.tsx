import { SHOP_LIST_ITEMS } from '../../../utils/constants';
import Menu, { ListItemType } from './components/Menu';

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  const listItemsAbout: ListItemType[] = [
    { id: 'ourStory', name: 'Our Story', routeLink: 'story' },
    {
      id: 'deliveryAndReturns',
      name: 'Delivery & Returns',
      routeLink: 'deliveryAndReturns',
    },
    { id: 'contactUs', name: 'Contact Us', routeLink: 'contact' },
  ];

  return (
    <div className={`${className} flex justify-evenly bg-black text-white`}>
      <Menu className='mr-5' title='Shop' listItems={SHOP_LIST_ITEMS} />
      <Menu title='About' listItems={listItemsAbout} />
    </div>
  );
};

export default Footer;
