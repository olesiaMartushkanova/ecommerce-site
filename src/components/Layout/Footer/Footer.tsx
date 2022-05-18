import { SHOP_LIST_ITEMS } from '../../../utils/constants';
import { ListItemType } from '../../Primitives/List/List';
import Menu from './components/Menu';

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  const listItemsAbout: ListItemType[] = [
    { id: 'ourStory', title: 'Our Story', routeLink: 'story' },
    {
      id: 'deliveryAndReturns',
      title: 'Delivery & Returns',
      routeLink: 'deliveryAndReturns',
    },
    { id: 'contactUs', title: 'Contact Us', routeLink: 'contact' },
  ];

  return (
    <div className={`${className} flex justify-evenly bg-black text-white`}>
      <Menu className='mr-5' title='Shop' listItems={SHOP_LIST_ITEMS} />
      <Menu title='About' listItems={listItemsAbout} />
    </div>
  );
};

export default Footer;
